import { JQueryUploaderDropzoneOptions } from "@bytescale/upload-widget-jquery/JQueryUploaderDropzoneOptions";
import { UploadWidgetResult } from "@bytescale/upload-widget";

export interface JQueryUploaderOptions {
  dropzone?: true | JQueryUploaderDropzoneOptions;
  onComplete?: (files: UploadWidgetResult[]) => void;
}
