import { Outlet, useOutletContext } from "react-router";
import { NavBar } from "@/components/layout/NavBar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { StudentNotesPanel } from "@/components/content/StudentNotesPanel";

type LayoutContext = {
  isNavBarOpen: boolean;
  closeNavBar: () => void;
  isNotesOpen: boolean;
  toggleNotes: () => void;
};

export default function Layout() {
  const { isNavBarOpen, closeNavBar, isNotesOpen, toggleNotes } =
    useOutletContext<LayoutContext>();
  return (
    <div
      className="
        relative
        grid
        grid-cols-[max-content_minmax(0,1fr)]
        h-full
        min-h-0
        flex-1
        gap-4 overflow-hidden
        max-[920px]:grid-cols-1!
      "
    >
      <NavBar
        isOpen={isNavBarOpen}
        closeNavBar={closeNavBar}
        isNotesOpen={isNotesOpen}
        toggleNotes={toggleNotes}
      />
      <main className="relative min-h-0">
        <div
          id="student-notes-panel-host"
          className="pointer-events-none absolute inset-y-0 left-1/2 z-40 w-[calc(100%_-_0.1rem)]
          max-w-4xl -translate-x-1/2
          max-[700px]:inset-x-0
          max-[700px]:w-full
          max-[700px]:translate-x-0"
        />
        <div
          className="h-full min-h-0 overflow-x-hidden overflow-y-auto pb-1"
          data-scroll-container
        >
          <Outlet />
        </div>
        <ScrollToTop />
        <StudentNotesPanel isOpen={isNotesOpen} onClose={toggleNotes} />
      </main>
    </div>
  );
}
