import { LuContact as Contact, LuFolderOpen as FolderOpen, LuMenu as Menu, LuSquareLibrary as SquareLibrary } from "react-icons/lu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

export default function Navbar() {
    return (
        <>
            <nav className="hidden sm:flex gap-6 text-lg lowercase top-0">
                <a href="/projects" className="hover:underline decoration-from-font flex gap-2 justify-between items-center"><FolderOpen/>projects</a>
                <a href="/blog" className="hover:underline decoration-from-font flex gap-2 justify-between items-center"><SquareLibrary/>blog</a>
                <a href="/#contact" className="hover:underline decoration-from-font flex gap-2 justify-between items-center"><Contact/>contact</a>
            </nav>

            <div className="sm:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" aria-label="Open Navigation Menu">
                            <Menu className="h-8 w-8" aria-label="Menu Icon"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="bg-white/25 border-none backdrop-blur-3xl">
                        <nav className="flex flex-col gap-4 pt-12 p-4 text-xl lowercase">
                            <a href="/projects" title="Projects" className="hover:underline decoration-from-font flex items-center gap-2"><FolderOpen className="h-8 w-8" aria-label="Project Icon"/>projects</a>
                            <a href="/blog" title="Blog" className="hover:underline decoration-from-font flex items-center gap-2"><SquareLibrary className="h-8 w-8" aria-label="Blog Icon"/>blog</a>
                            <a href="/#contact" title="Contact" className="hover:underline decoration-from-font flex items-center gap-2"><Contact className="h-8 w-8" aria-label="Contact Icon"/>contact</a>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
}