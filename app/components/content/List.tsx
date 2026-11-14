import { Checkbox } from "@/components/ui/Checkbox";
import { InlineRichContent } from "@/components/content/InlineRichContent";
import type { RichContent } from "@/helpers/content";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/Button";

type ListItem = {
  content: RichContent;
  textarea?: boolean;
  suggestedAnswer?: string;
};

export type ListProps = {
  instruction?: string;
  checklist?: {
    checked: boolean[];
    disabled: boolean;
    onChange: (index: number, checked: boolean) => void;
  };
  items?: ListItem[];
  type?: "none" | "ul" | "ol" | "checkbox";
};

export const List = ({ instruction, checklist, items = [], type = "none" }: ListProps) => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [showAnswers, setShowAnswers] = useState(false);

  if (type === "checkbox") {
    return (
      <div className="mb-4">
        <p className="font-bold mb-4">{instruction}</p>

        {items.map((item, index) => (
          <div key={index}>
            <label className="flex items-start gap-[5px]">
              <Checkbox
                className="mr-1"
                checked={checklist?.checked[index] ?? checkedItems[index] ?? false}
                disabled={checklist?.disabled}
                onCheckedChange={(checked) =>
                  checklist ? checklist.onChange(index, checked) : setCheckedItems((current) => ({
                    ...current,
                    [index]: checked,
                  }))
                }
              />
              <InlineRichContent value={item.content} />
            </label>
            {item.textarea && (
              <textarea
                name=""
                id=""
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-lg"
              ></textarea>
            )}
          </div>
        ))}
      </div>
    );
  }

  const Tag = type === "ol" ? "ol" : "ul";

  return (
    <div className="mb-4">
      <p className="font-bold mb-4">{instruction}</p>

      <Tag
        className={
          type === "none"
            ? "list-none"
            : type === "ol"
              ? "list-decimal list-outside pl-6"
              : "list-disc list-outside pl-6"
        }
      >
        {items.map((item, index) => (
          <li key={index}>
            <InlineRichContent value={item.content} />
            {showAnswers && item.suggestedAnswer && (
              <p className="mb-3 mt-1 text-sm">
                <strong>Suggested answer:</strong> {item.suggestedAnswer}
              </p>
            )}
          </li>
        ))}
      </Tag>
      {items.some((item) => item.suggestedAnswer) && (
        <Button
          className="mt-3"
          ariaLabel={showAnswers ? "Hide suggested answers" : "Show suggested answers"}
          icon={showAnswers ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
          onClick={() => setShowAnswers((current) => !current)}
        />
      )}
    </div>
  );
};
