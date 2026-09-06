import { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import { FlowBlock } from "./diagrams/FlowBlock";
import { PowerOverview } from "./diagrams/PowerOverview";
import { FactionRelations } from "./diagrams/FactionRelations";

type Props = {
  content: string;
};

const diagramMap: Record<string, React.ReactNode> = {
  OVERVIEW: <PowerOverview />,
  FACTIONS: <FactionRelations />,
};

function isFlowDiagram(text: string): boolean {
  const trimmed = text.trim();
  return (
    trimmed.includes("↓") ||
    trimmed.includes("┌") ||
    trimmed.includes("──") ||
    trimmed.includes("→")
  );
}

const components: Components = {
  pre({ children }) {
    const child = children as React.ReactElement<{ children?: string }>;
    const text =
      typeof child?.props?.children === "string"
        ? child.props.children
        : "";

    if (text && isFlowDiagram(text)) {
      return <FlowBlock lines={text.trim().split("\n")} />;
    }

    return <pre>{children}</pre>;
  },
};

function MarkdownBlock({ text }: { text: string }) {
  if (!text.trim()) return null;
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {text}
    </ReactMarkdown>
  );
}

export function MarkdownContent({ content }: Props) {
  const parts = content.split(/\[DIAGRAM:(\w+)\]/);

  return (
    <div className="prose-custom">
      {parts.map((part, i) => {
        if (i % 2 === 1) {
          return <Fragment key={i}>{diagramMap[part] ?? null}</Fragment>;
        }
        return <MarkdownBlock key={i} text={part} />;
      })}
    </div>
  );
}
