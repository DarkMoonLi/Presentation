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

export function dispatch(modifyFn: Function, payload: object)
{
  const newEditor = modifyFn(editor, payload);
  console.log(editor)
  setEditor(newEditor)

  if(editorChangeHandler)
  {
    editorChangeHandler()
  }
}