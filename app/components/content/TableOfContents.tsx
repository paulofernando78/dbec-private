import { Fragment, type ElementType, type ReactNode } from "react";
import { useNavigate } from "react-router";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { InlineRichContent } from "@/components/content/InlineRichContent";
import type { RichContent } from "@/helpers/content";
import { ArrowUpRight, Link2 } from "lucide-react";

type TableOfContentsItem = {
  title?: RichContent | string;
  description?: RichContent | string;
  href?: string;
  to?: string;
  id?: string;
  label?: RichContent | string;
  iconClassName?: string;
  className?: string;
  contentAfter?: ReactNode;
};

type TableOfContentsProps = {
  subtitle?: ReactNode;
  items?: TableOfContentsItem[];
  headerIcon?: ElementType;
  itemIcon?: ElementType;
  headerIconClassName?: string;
  itemIconClassName?: string;
};

export const TableOfContents = ({
  subtitle,
  items = [],
  headerIcon: HeaderIcon,
  itemIcon: ItemIcon,
  headerIconClassName = "text-gray-400",
  itemIconClassName = "text-gray-400",
}: TableOfContentsProps) => {
  const navigate = useNavigate();
  const toValue = (value: RichContent | string): RichContent =>
    Array.isArray(value) ? value : [value];

  return (
    <Card className="mb-4 bg-(--surface) font-oswald text-lg">
      <div
        className="flex gap-2"
      >
        {HeaderIcon && (
          <HeaderIcon
            aria-hidden="true"
            className={`size-6 shrink-0 ${headerIconClassName}`}
          />
        )}
        <h2 className="mb-4 text-2xl font-bold">Table of Contents</h2>
      </div>
      <nav className="rounded-xl bg-(--background) p-4">
        {subtitle && <div className="mb-2 font-bold">{subtitle}</div>}
        <ul>
          {items.map((item, index) => {
            const key = item.href || item.to || item.id || `item-${index}`;

            return (
              <Fragment key={key}>
                {item.title && (
                  <span className="block font-bold uppercase">
                    <InlineRichContent value={toValue(item.title)} />
                  </span>
                )}

                {item.description && !item.to && (
                  <span className="mb-2 block whitespace-pre-line text-sm uppercase">
                    <InlineRichContent value={toValue(item.description)} />
                  </span>
                )}

                {item.href && (
                  <li className={`flex items-center gap-2 py-1 ${item.className ?? ""}`}>
                    <Button
                      href={`#${item.href}`}
                      ariaLabel={`Go to ${typeof item.label === "string" ? item.label : "section"}`}
                      icon={ItemIcon ? (
                        <ItemIcon aria-hidden="true" className={item.iconClassName ?? itemIconClassName} />
                      ) : (
                        <Link2 aria-hidden="true" className={item.iconClassName ?? itemIconClassName} />
                      )}
                      className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--text-color)"
                    />
                    {item.label && (
                      <span className="text-(--text-color)">
                        <InlineRichContent value={toValue(item.label)} />
                      </span>
                    )}
                  </li>
                )}

                {item.to && (
                  <li className={`flex items-center gap-2 py-1 ${item.className ?? ""}`}>
                    <Button
                      ariaLabel={`Open ${typeof item.label === "string" ? item.label : "page"}`}
                      icon={ItemIcon ? (
                        <ItemIcon aria-hidden="true" className={item.iconClassName ?? itemIconClassName} />
                      ) : (
                        <ArrowUpRight aria-hidden="true" className={item.iconClassName ?? itemIconClassName} />
                      )}
                      className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--text-color)"
                      onClick={() => navigate(item.to!)}
                    />
                    <div>
                      {item.label && (
                        <span className="block text-(--text-color)">
                          <InlineRichContent value={toValue(item.label)} />
                        </span>
                      )}
                      {item.description && (
                        <span className="block text-sm uppercase text-slate-500">
                          <InlineRichContent value={toValue(item.description)} />
                        </span>
                      )}
                    </div>
                  </li>
                )}

                {item.contentAfter}
              </Fragment>
            );
          })}
        </ul>
      </nav>
    </Card>
  );
};
