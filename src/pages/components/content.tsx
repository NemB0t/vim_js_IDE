import { CodeEditor } from "./codeEditor";
import lineStyles from '../../styles/codeEditor.module.css'
// import { Output } from "./output";

export function Content(){
    return(
        <div className="h-full grid grid-cols-[2fr_1fr] grid-rows-2 items-center justify-items-center gap-4 p-4 bg-zinc-300">
            <div className="row-span-full bg-white max-h-full h-full w-full rounded-md border border-black"id={lineStyles.mainEditor}><CodeEditor/></div>
            <div className="h-full w-full box-border ">
                <textarea className="w-full h-full border border-black rounded-md  box-border p-4 resize-none" placeholder="Input"/>
            </div>
            <div className="h-full w-full box-border">
                <div className="w-full h-full border border-black rounded-md  box-border p-4 resize-none bg-white">
                    Waiting for the Output
                </div>
            </div>
        </div>
    );
}