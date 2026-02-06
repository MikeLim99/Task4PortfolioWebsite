import React, { useState, useRef } from "react";
import Navbar from "../../components/navbar";
import InputField from "../../components/basics/InputField";
import Button from "../../components/basics/button";
import Images from "../../assets/unnamed.jpg";
import InsertFileButton from "../../components/basics/InsertFileButton";
import TagsInput from "../../components/basics/TagsInput";
import useAddProject from "../../hooks/useAddProject";
import { Toaster } from "react-hot-toast";

function AddProject() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(Images);
  const [uploadedImages, setUploadedImages] = useState([]);
  const uploadedFilesRef = useRef([]);
  const [tags, setTags] = useState([]);
  const { handleSubmit, formData, setFormData } = useAddProject();

  const handleFileUpload = (files) => {
    console.log('handleFileUpload called with:', files);
    const fileArray = Array.from(files);
    console.log('File array:', fileArray);
    
    // Store files in ref immediately (no async issue)
    uploadedFilesRef.current = [...uploadedFilesRef.current, ...fileArray];
    console.log('uploadedFilesRef.current:', uploadedFilesRef.current);
    
    // Create preview URLs for display
    const previews = fileArray.map(file => URL.createObjectURL(file));
    setUploadedImages([...uploadedImages, ...previews]);
  };

  const openImageModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsImageOpen(true);
  };

  const onSubmit = (e) => {
    console.log('onSubmit - uploadedFilesRef.current:', uploadedFilesRef.current);
    handleSubmit(e, uploadedFilesRef.current);
  };

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="w-full">
        <form onSubmit={onSubmit}>
          <h1 className="w-full text-center text-3xl font-bold my-5">
            Add Project
          </h1>
          <div className="w-full flex justify-center items-center">
            <div className="grid grid-cols-2 gap-5 mx-auto">
              <InputField
                PlaceHolder={"Project Name"}
                Type={"text"}
                classStyle={"w-[400px]"}
                OnChange={(e) =>
                  setFormData({ ...formData, ProjectName: e.target.value })
                }
                Required={true}
              />
              <InputField
                PlaceHolder={"Assigned Position"}
                Type={"text"}
                classStyle={"w-[400px]"}
                OnChange={(e) =>
                  setFormData({ ...formData, assignedPosition: e.target.value })
                }
                Required={true}
              />
              <InputField
                PlaceHolder={"Link"}
                Type={"text"}
                classStyle={"w-[400px]"}
                OnChange={(e) =>
                  setFormData({ ...formData, projectLink: e.target.value })
                }
              />
            </div>
          </div>

          <div className="w-full flex justify-center items-center my-5">
            <textarea
              placeholder="Project Description"
              className="w-[820px] h-[200px] p-2 rounded-md"
              style={{ color: "#2D3E50", backgroundColor: "#ECF0F1" }}
              onChange={(e) =>
                setFormData({ ...formData, ProjectDescription: e.target.value })
              }
            />
          </div>

          <div className="w-full flex justify-center items-center my-5">
            <div className="w-[820px]">
              <label className="block text-sm font-semibold mb-2 text-[#2D3E50]">
                Tags
              </label>
              <TagsInput
                tags={tags}
                onTagsChange={(newTags) => {
                  setTags(newTags);
                  setFormData({ ...formData, tags: newTags });
                }}
              />
            </div>
          </div>
          {uploadedImages.length > 0 && (
            <div className="w-full flex justify-center items-center my-5">
              <div className="flex gap-4 flex-wrap justify-center">
                {uploadedImages.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => openImageModal(img)}
                    className="w-[150px] h-[150px] rounded-md overflow-hidden hover:scale-105 transition-transform"
                  >
                    <img
                      src={img}
                      alt={`Preview ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="w-full flex justify-center items-center my-5">
            <InsertFileButton
              Label="Attach File"
              Accept="image/*"
              Multiple={true}
              onChange={(files) => {
                handleFileUpload(files);
                setFormData({ ...formData, images: uploadedImages });
              }}
            />
          </div>

          <div className="w-full flex justify-center items-center my-5">
            <Button Title={"Post"} submitBtn={true} />
          </div>
        </form>
      </div>

      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setIsImageOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-[500px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsImageOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl"
              aria-label="Close image preview"
            >
              x
            </button>
            <img
              src={selectedImage}
              alt="Project full size"
              className="w-[500px] rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProject;
