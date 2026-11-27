import { useEffect, useState, type FormEvent } from "react";
import { useLocation } from "react-router";

import { Button } from "@/components/ui/Button/Button";

import { X } from "lucide-react";
import { DASHBOARD_PATH_STORAGE_KEY } from "@/utils/session-storage";

export const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");

  const location = useLocation();

  const loginParams = new URLSearchParams(location.search);
  const sessionExpired = loginParams.get("login") === "expired";

  useEffect(() => {
    if (
      sessionExpired ||
      new URLSearchParams(location.search).get("login") === "required"
    ) {
      setIsLoginOpen(true);
    }
  }, [location.search, sessionExpired]);

  useEffect(() => {
    const openLogin = () => {
      setLoginError("");
      setIsLoginOpen(true);
    };

    window.addEventListener("dbec:open-login", openLogin);
    return () => window.removeEventListener("dbec:open-login", openLogin);
  }, []);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setLoginError("");

    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.get("username"),
        password: form.get("password"),
      }),
    });

    if (response.ok) {
      const result = (await response.json()) as { redirectTo?: string };
      const redirectTo = result.redirectTo ?? "/dashboard";
      localStorage.setItem(DASHBOARD_PATH_STORAGE_KEY, redirectTo);
      const next = loginParams.get("next");
      const destination = next?.startsWith("/")
        ? URL.parse(next, window.location.origin)
        : null;
      window.location.assign(
        sessionExpired && destination?.origin === window.location.origin
          ? destination.href
          : redirectTo,
      );
      return;
    }

    const result = (await response.json().catch(() => null)) as {
      error?: string;
    } | null;
    setLoginError(result?.error ?? "Não foi possível entrar.");
    setIsSubmitting(false);
  };

  if (!isLoginOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-[2px]"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setIsLoginOpen(false);
      }}
    >
      <div className="pointer-events-none flex w-full justify-center">
        <form
          onSubmit={handleLogin}
          className="pointer-events-auto w-full max-w-sm rounded-lg border border-gray-300 bg-white p-4 text-gray-900 shadow-xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="login-title"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 id="login-title" className="text-xl font-bold">
              Login
            </h2>
            <Button
              onClick={() => setIsLoginOpen(false)}
              ariaLabel="Fechar login"
              icon={<X />}
            />
          </div>

          {sessionExpired && (
            <p className="mb-4 text-sm" role="status">
              Você foi desconectado após 10 minutos de inatividade. Faça login
              novamente para continuar.
            </p>
          )}

          <label className="mb-3 block">
            <span className="mb-1 block font-semibold">Usuário</span>
            <input
              name="username"
              autoComplete="username"
              required
              className="w-full rounded border border-gray-300 px-3 py-2"
            />
          </label>

          <label className="mb-4 block">
            <span className="mb-1 block font-semibold">Senha</span>
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full rounded border border-gray-300 px-3 py-2"
            />
          </label>

          {loginError && (
            <p className="mb-3 text-sm font-semibold text-red-600" role="alert">
              {loginError}
            </p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            variant="list"
            className="w-full! bg-gray-900! px-4 py-2 font-bold text-white! hover:bg-gray-700! [&>span>span]:justify-center"
          >
            {isSubmitting ? "Entrando…" : "Entrar"}
          </Button>
        </form>
      </div>
    </div>
  );
};
