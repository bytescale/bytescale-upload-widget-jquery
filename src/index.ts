import { Uploader, UploaderInterface, UploadWidgetResult, UploadWidgetConfig } from "uploader";
import { UploadInterface, UploadConfig } from "upload-js";
import { JQueryUploaderOptions } from "@upload-io/jquery-uploader/JQueryUploaderOptions";
import { JQueryUploaderDropzoneOptions } from "@upload-io/jquery-uploader/JQueryUploaderDropzoneOptions";

(function ($) {
  let uploader: UploaderInterface | undefined;

  $.extend({
    uploader: {
      init(uploadOrConfig: UploadConfig | UploadInterface) {
        uploader = Uploader(uploadOrConfig);
      }
    }
  });

  const useUploader = (callback: (uploader: UploaderInterface) => void): void => {
    if (uploader === undefined) {
      console.error("[jquery-uploader] Initialization required, e.g. $.uploader.init({apiKey: 'free'})");
    } else {
      callback(uploader);
    }
  };

  const funcs: any = $.fn;
  funcs.uploader = function (optionsMaybe?: UploadWidgetConfig & JQueryUploaderOptions) {
    const handleOnComplete = (promise: Promise<UploadWidgetResult[]>): void => {
      promise.then(
        files => {
          const onComplete = optionsMaybe?.onComplete;
          if (onComplete !== undefined) {
            onComplete(files);
          }
        },
        e => console.error(`[jquery-uploader] Unexpected error.`, e)
      );
    };

    if (
      optionsMaybe?.layout === "inline" ||
      optionsMaybe?.dropzone === true ||
      typeof optionsMaybe?.dropzone === "object"
    ) {
      const dropzone: undefined | JQueryUploaderDropzoneOptions =
        typeof optionsMaybe?.dropzone === "object" ? optionsMaybe?.dropzone : undefined;

      $(this).css({
        position: "relative",
        width: "100%",
        minWidth: "280px",
        maxWidth: dropzone?.width ?? "600px",
        height: dropzone?.height ?? "375px"
      });

      useUploader(u =>
        $(this)
          .get()
          .forEach(element => {
            handleOnComplete(
              u.open({
                ...optionsMaybe,
                layout: "inline",
                container: element
              })
            );
          })
      );
    } else {
      $(this).on("click", function () {
        useUploader(u => handleOnComplete(u.open(optionsMaybe)));
      });
    }

    return this;
  };
})(jQuery);
