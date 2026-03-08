import type { TutorialBlock } from '../../store/types';
import TextBlock from './blocks/TextBlock';
import RuleBlock from './blocks/RuleBlock';
import TableBlock from './blocks/TableBlock';
import ExampleBlock from './blocks/ExampleBlock';
import DiagramBlock from './blocks/DiagramBlock';
import DecisionBlock from './blocks/DecisionBlock';
import CalloutBlock from './blocks/CalloutBlock';
import ComparisonBlock from './blocks/ComparisonBlock';

interface BlockRendererProps {
  block: TutorialBlock;
}

export default function BlockRenderer({ block }: BlockRendererProps) {
  switch (block.type) {
    case 'text':
      return <TextBlock content={block.content} />;
    case 'rule':
      return <RuleBlock title={block.title} content={block.content} />;
    case 'table':
      return <TableBlock headers={block.headers} rows={block.rows} caption={block.caption} colorCoded={block.colorCoded} />;
    case 'example':
      return <ExampleBlock german={block.german} english={block.english} highlights={block.highlights} />;
    case 'diagram':
      return <DiagramBlock slots={block.slots} caption={block.caption} />;
    case 'decision':
      return <DecisionBlock question={block.question} yes={block.yes} no={block.no} />;
    case 'callout':
      return <CalloutBlock variant={block.variant} content={block.content} />;
    case 'comparison':
      return <ComparisonBlock left={block.left} right={block.right} />;
  }
}
