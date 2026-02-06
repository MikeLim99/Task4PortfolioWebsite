import React from "react";
import Navbar from "../../components/navbar";
import InputField from "../../components/basics/InputField";
import InsertFileButton from "../../components/basics/InsertFileButton";
import Button from "../../components/basics/button";
import useAddCertificate from "../../hooks/certificate/useAddCertificate";

function AddCertificate() {
    const { handleSubmit, formData, setFormData } = useAddCertificate()

  return (
    <div className="min-h-screen">
      <Navbar />
      <h1 className="w-full text-center text-3xl font-bold my-5">
        Add Certificate
      </h1>
      <form onSubmit={handleSubmit}>
      <div className="w-full flex justify-center items-center">
        <div className="grid grid-cols-2 gap-5 mx-auto">
          <InputField
            PlaceHolder={"Title"}
            Type={"text"}
            classStyle={"w-[400px]"}
            OnChange={(e) =>
              setFormData({ ...formData, Title: e.target.value })
            }
          />
          <InputField
            PlaceHolder={"Issuer"}
            Type={"text"}
            classStyle={"w-[400px]"}
            OnChange={(e) =>
              setFormData({ ...formData, Issuer: e.target.value })
            }
          />
          <InputField
            PlaceHolder={"Issue Date"}
            Type={"date"}
            classStyle={"w-[400px]"}
            OnChange={(e) =>
              setFormData({ ...formData, IssueDate: e.target.value })
            }
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center my-5">
        <textarea
          placeholder="Certificate Description"
          className="w-[820px] h-[200px] p-2 rounded-md"
          style={{ color: "#2D3E50", backgroundColor: "#ECF0F1" }}
          onChange={(e) =>
            setFormData({ ...formData, Description: e.target.value })
          }
        />
      </div>
      <div className="w-full flex justify-center items-center my-5">
        <InsertFileButton
          Label="Attach File"
          Accept="image/*"
          onChange={(files) => {
            setFormData({ ...formData, CertImage: files[0] });
          }}
        />
      </div>

      <div className="w-full flex justify-center items-center my-5">
        <Button Title={"Post"} submitBtn={true} />
      </div>
    </form>
    </div>
  );
}

export default AddCertificate;
