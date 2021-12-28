import { Application } from "./structure";

export let editor = {} as Application;
export let editorChangeHandler: Function = () => null;

export function getEditor()
{
  return editor;
}

export function setEditor(newEditor: Application)
{
  editor = newEditor;
}

export function addEditorChangeHandler(handler: Function)
{
  editorChangeHandler = handler
}

export function dispatch(modifyFn: Function, payload: any)
{
  const newEditor: Application = modifyFn(editor, payload);
  console.log(newEditor);
  if (newEditor !== undefined) {
    setEditor(newEditor)
  }

  if(editorChangeHandler)
  {
    editorChangeHandler()
  }
}