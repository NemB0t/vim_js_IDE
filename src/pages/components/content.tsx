import { CodeEditor } from "./codeEditor";
import { Output } from "./output";

export function Content(){
    return(
        <div className="h-full grid grid-cols-[2fr_1fr] grid-rows-2 items-center justify-items-center">
            <div className="row-span-full"><CodeEditor/></div>
            <div className="h-full w-full box-border p-4">
                <textarea className="w-full h-full border border-black rounded-md  box-border p-4 resize-none" placeholder="Input"/>
            </div>
            <div className="h-full w-full box-border p-4">
                <textarea className="w-full h-full border border-black rounded-md  box-border p-4 resize-none" 
                placeholder="Waiting for the Output" disabled={true} />
            </div>
        </div>
    );
}