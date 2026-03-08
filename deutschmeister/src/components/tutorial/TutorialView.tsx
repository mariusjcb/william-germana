import { useCallback, useEffect, useRef, useState } from 'react';
import { BookOpen } from 'lucide-react';
import type { GrammarTutorial } from '../../store/types';
import SectionNav from './SectionNav';
import BlockRenderer from './BlockRenderer';

interface TutorialViewProps {
  tutorial: GrammarTutorial;
  onStartPractice: () => void;
}

export default function TutorialView({ tutorial, onStartPractice }: TutorialViewProps) {
  const [activeSection, setActiveSection] = useState(tutorial.sections[0]?.id ?? '');
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  const scrollToSection = useCallback((id: string) => {
    setActiveSection(id);
    sectionRefs.current.get(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section-id');
            if (id) setActiveSection(id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    for (const el of sectionRefs.current.values()) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, [tutorial]);

  return (
    <div className="space-y-5">
      {/* Introduction */}
      <p className="text-sm text-text-secondary leading-relaxed">{tutorial.introduction}</p>

      {/* Section Navigation */}
      <SectionNav sections={tutorial.sections} activeId={activeSection} onSelect={scrollToSection} />

      {/* Sections */}
      {tutorial.sections.map((section) => (
        <div
          key={section.id}
          data-section-id={section.id}
          ref={(el) => {
            if (el) sectionRefs.current.set(section.id, el);
          }}
          className="scroll-mt-4"
        >
          <h3 className="text-lg font-bold text-text-primary mb-3">{section.title}</h3>
          <div className="space-y-4">
            {section.blocks.map((block, i) => (
              <BlockRenderer key={i} block={block} />
            ))}
          </div>
        </div>
      ))}

      {/* Start Practice CTA */}
      <button
        onClick={onStartPractice}
        className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary-dark transition-colors mt-6"
      >
        <BookOpen size={18} />
        Start Practice
      </button>
    </div>
  );
}
