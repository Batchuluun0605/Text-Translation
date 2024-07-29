import { IconPaperclip } from "@tabler/icons-react";
import React from "react";

const FileUpload = ({ handleFileUpload }) => {
  return (
    <label htmlFor="file-upload" className="cursor-pointer">
      <IconPaperclip size={21} className="text-white" />
      <input
        type="file"
        id="file-upload"
        onChange={handleFileUpload}
        className="hidden"
      />
    </label>
  );
};

export default FileUpload;
