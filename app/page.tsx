import { Button } from "@/components/memphi/button";


export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex flex-col gap-4 p-8 max-w-md w-full">
        {/* Default oval buttons */}
        <Button>Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        
        {/* Rectangle buttons */}
        <Button shape="rectangle">Rectangle</Button>
        <Button shape="rectangle" variant="destructive">Destructive</Button>
        
        {/* Colored shadows */}
        <Button shadowColor="oklch(0.7 0.2 27.3)">Red Shadow</Button>
        <Button shadowColor="oklch(0.6 0.2 240)" shape="rectangle">Blue Rectangle</Button>
      </div>
    </div>
  );
}
