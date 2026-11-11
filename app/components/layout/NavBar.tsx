import { useLocation, useNavigate } from "react-router";
import { links } from "@/data/nav-bar-links";
import { useEffect, useState, type ElementType } from "react";
import { NotebookPen, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlobalSearch } from "./GlobalSearch";

type NavBarProps = {
  isOpen: boolean;
  closeNavBar: () => void;
  isNotesOpen: boolean;
  toggleNotes: () => void;
};

export function NavBar({
  isOpen,
  closeNavBar,
  isNotesOpen,
  toggleNotes,
}: NavBarProps) {
  const [dashboardPath, setDashboardPath] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/api/session")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load session.");
        return response.json();
      })
      .then((session) => {
        const nextDashboardPath = session.dashboardPath ?? "/dashboard";
        setDashboardPath(nextDashboardPath);
        localStorage.setItem("dbec_dashboard_path", nextDashboardPath);
      })
      .catch(() => {
        setDashboardPath(null);
        localStorage.removeItem("dbec_dashboard_path");
      });
  }, [location.pathname]);

  const renderNavigationButton = (
    href: string,
    label: string,
    Icon: ElementType,
    className = "",
  ) => {
    const [hrefPath, hrefHash = ""] = href.split("#");
    const isCurrentDestination =
      location.pathname === hrefPath &&
      (!hrefHash || location.hash === `#${hrefHash}`);

    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Button
          ariaLabel={label}
          pressed={
            href === dashboardPath
              ? location.pathname.startsWith(hrefPath)
              : isCurrentDestination
          }
          icon={<Icon />}
          onClick={() => {
            navigate(href);
            closeNavBar();
          }}
          className="size-10! p-0.75!"
        />
        <span
          className={`font-bold ${label === "TED-Ed" ? "normal-case" : "uppercase"}`}
        >
          {label}
        </span>
      </div>
    );
  };
  const navbarBlockStyle = `
    p-4 rounded-xl bg-gray-200
  `


  return (
    <nav
      className={`space-y-4 h-full min-h-0 w-max overflow-y-auto rounded-xl bg-(--surface) p-4 text-gray-500 transition-transform duration-500 ease-in-out z-20
      max-[920px]:absolute max-[920px]:-translate-x-100
      max-[420px]:w-full
      max-[390px]:-translate-x-full
      ${isOpen ? "max-[920px]:translate-x-0" : ""}`}
    >
      {links.map((item) => {
        if ("group" in item) {
          return (
            <div key={item.group} className={navbarBlockStyle}>
              <p className="mb-2 font-black uppercase tracking-wider">
                {item.group}
              </p>
              <div className="space-y-2">
                {item.children.map((child) => {
                  if ("subgroup" in child) {
                    return (
                      <div key={child.subgroup} className="pt-2 first:pt-0">
                        <p className="mb-2 text-xs font-black uppercase tracking-wider text-gray-400">
                          {child.subgroup}
                        </p>
                        <div className="space-y-2">
                          {child.children.map(({ href, label, icon: Icon }) =>
                            Icon ? (
                              <div key={href}>
                                {renderNavigationButton(href, label, Icon)}
                              </div>
                            ) : null,
                          )}
                        </div>
                      </div>
                    );
                  }

                  const { href, label, icon: Icon } = child;
                  return Icon ? (
                    <div key={href}>
                      {renderNavigationButton(href, label, Icon)}
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          );
        }

        const { href, label, icon: Icon } = item;
        const isAuthenticatedLink = href === "/dashboard";
        const resolvedHref = href === "/dashboard" ? dashboardPath : href;

        if (href === "/dashboard") {
          return dashboardPath ? (
            <div key={href} className={navbarBlockStyle}>
              <GlobalSearch closeNavBar={closeNavBar} />
              {renderNavigationButton(dashboardPath, "Dashboard", User, "mb-2")}
              <div className="flex items-center gap-2">
                <Button
                  ariaLabel={isNotesOpen ? "Close notes" : "Open notes"}
                  pressed={isNotesOpen}
                  icon={<NotebookPen />}
                  onClick={toggleNotes}
                  className="size-10! p-0.75!"
                />
                <span className="font-bold uppercase">notes shortcut</span>
              </div>
            </div>
          ) : null;
        }

        return (
          <div key={href}>
            {resolvedHref &&
              Icon &&
              (!isAuthenticatedLink || dashboardPath) &&
              renderNavigationButton(resolvedHref, label, Icon, "mb-2")}
          </div>
        );
      })}
    </nav>
  );
}
