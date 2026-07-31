import searchModels from "./triggers/searchModels.js";
import searchExtractionModels from "./triggers/searchExtractionModels.js";
import searchCropModels from "./triggers/searchCropModels.js";
import searchSplitModels from "./triggers/searchSplitModels.js";
import searchClassificationModels from "./triggers/searchClassificationModels.js";
import searchOcrModels from "./triggers/searchOcrModels.js";
import createExtractionEnqueueAndGetInference from "./creates/v2_file_enqueue_and_poll.js";
import createCropEnqueueAndGetInference from "./creates/v2_crop_enqueue_and_poll.js";
import createSplitEnqueueAndGetInference from "./creates/v2_split_enqueue_and_poll.js";
import createClassificationEnqueueAndGetInference from "./creates/v2_classification_enqueue_and_poll.js";
import createOcrEnqueueAndGetInference from "./creates/v2_ocr_enqueue_and_poll.js";

export {
  searchModels,
  searchExtractionModels,
  searchCropModels,
  searchSplitModels,
  searchClassificationModels,
  searchOcrModels,
  createExtractionEnqueueAndGetInference,
  createCropEnqueueAndGetInference,
  createSplitEnqueueAndGetInference,
  createClassificationEnqueueAndGetInference,
  createOcrEnqueueAndGetInference,
};
