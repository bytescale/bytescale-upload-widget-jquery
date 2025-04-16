import { JQueryUploaderOptions } from "@bytescale/upload-widget-jquery/JQueryUploaderOptions";
import { JQueryUploaderDropzoneOptions } from "@bytescale/upload-widget-jquery/JQueryUploaderDropzoneOptions";
import { UploadWidget, UploadWidgetConfig, UploadWidgetResult } from "@bytescale/upload-widget";

(function ($) {
  const funcs: any = $.fn;
  funcs.bytescaleUploadWidget = function (options: UploadWidgetConfig & JQueryUploaderOptions) {
    const handleOnComplete = (promise: Promise<UploadWidgetResult[]>): void => {
      promise.then(
        files => {
          const onComplete = options.onComplete;
          if (onComplete !== undefined) {
            onComplete(files);
          }
        },
        e => console.error(`[bytescale-upload-widget] Unexpected error.`, e)
      );
    };

    if (options.layout === "inline" || options.dropzone === true || typeof options.dropzone === "object") {
      const dropzone: undefined | JQueryUploaderDropzoneOptions =
        typeof options.dropzone === "object" ? options.dropzone : undefined;

      $(this).css({
        position: "relative",
        width: "100%",
        minWidth: "280px",
        maxWidth: dropzone?.width ?? "600px",
        height: dropzone?.height ?? "375px"
      });

      $(this)
        .get()
        .forEach((element: HTMLElement) => {
          handleOnComplete(
            UploadWidget.open({
              ...options,
              layout: "inline",
              container: element
            })
          );
        });
    } else {
      $(this).on("click", function () {
        handleOnComplete(UploadWidget.open(options));
      });
    }

    return this;
  };
})(jQuery);
