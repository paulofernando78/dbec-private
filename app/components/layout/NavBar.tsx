import { useSession } from "@/hooks/useSession";
import { useLocation, useNavigate } from "react-router";
import { links } from "@/data/nav-bar-links";
import { useEffect, type ElementType } from "react";
import { LockKeyhole, NotebookPen, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlobalSearch } from "./GlobalSearch";
import { ActionTextRow } from "@/components/content/ActionTextRow";

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
  const session = useSession();
  const dashboardPath = session ? session.dashboardPath ?? "/dashboard" : null;
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (dashboardPath) localStorage.setItem("dbec_dashboard_path", dashboardPath);
    else if (session === null) localStorage.removeItem("dbec_dashboard_path");
  }, [dashboardPath, session]);

  const renderNavigationButton = (
    href: string,
    label: string,
    Icon: ElementType,
    className = "",
    locked = false,
  ) => {
    const [hrefPath, hrefHash = ""] = href.split("#");
    const isCurrentDestination =
      location.pathname === hrefPath &&
      (!hrefHash || location.hash === `#${hrefHash}`);

    return (
      <ActionTextRow
        as="div"
        gap="gap-2"
        textAtTop={locked}
        className={className}
        action={
          <Button
          ariaLabel={label}
          pressed={
            href === dashboardPath
              ? location.pathname.startsWith(hrefPath)
              : isCurrentDestination
          }
          icon={locked ? <LockKeyhole /> : <Icon />}
          onClick={() => {
            if (locked) return;
            navigate(href);
            closeNavBar();
          }}
          disabled={locked}
          ariaDisabled={locked}
          className="size-10! p-0.75!"
          />
        }
      >
        <span
          className={`font-bold ${href === "/authentic-content" ? "normal-case" : "uppercase"}`}
        >
          {label}
        </span>
      </ActionTextRow>
    );
  };
  const navbarBlockStyle = `
    p-4 rounded-xl bg-gray-200
  `


  return (
    <nav
      className={`space-y-4 h-full min-h-0 w-max overflow-y-auto rounded-xl bg-(--surface) p-4 text-gray-500 transition-transform duration-500 ease-in-out z-20
      max-[920px]:absolute max-[920px]:left-0 max-[920px]:top-0 max-[920px]:max-w-full
      max-[420px]:w-full
      ${isOpen ? "max-[920px]:translate-x-0" : "max-[920px]:-translate-x-full max-[920px]:invisible"}`}
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
                          {child.children.map(({ href, label, icon: Icon, locked }) =>
                            Icon ? (
                              <div key={href}>
                                {renderNavigationButton(href, label, Icon, "", locked)}
                              </div>
                            ) : null,
                          )}
                        </div>
                      </div>
                    );
                  }

                  const { href, label, icon: Icon, locked } = child;
                  return Icon ? (
                    <div key={href}>
                      {renderNavigationButton(href, label, Icon, "", locked)}
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
              <ActionTextRow
                as="div"
                gap="gap-2"
                action={
                  <Button
                  ariaLabel={isNotesOpen ? "Close notes" : "Open notes"}
                  pressed={isNotesOpen}
                  icon={<NotebookPen />}
                  onClick={toggleNotes}
                  className="size-10! p-0.75!"
                  />
                }
              >
                <span className="font-bold uppercase">notes shortcut</span>
              </ActionTextRow>
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
