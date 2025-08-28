interface SectionProps {
  params: {
    sectionId: string;
    noteId: string;
  };
}

export default function SectionDetail({ params }: SectionProps) {
  return (
    <h1>
      Note {params.noteId} Section {params.sectionId}
    </h1>
  );
}
