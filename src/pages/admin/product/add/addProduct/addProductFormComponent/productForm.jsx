import React from "react";
import ReactQuill from "react-quill";
import FormSection from "../../../../../../components/FormInput/FormSection";
import FormInput from "../../../../../../components/FormInput/FormInput";
import "./form.css";
const ProductForm = ({
  formData,
  handleChange,
  handleDescriptionChange,
  errorMessage,
}) => {
  return (
    <div>
      <FormSection title="Product Details">
        <FormInput
          label="Product Name"
          name="name"
          type="text"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <div className="flex flex-col mt-4">
          <label className="font-semibold">Product Description</label>
          <ReactQuill
            name="description"
            value={formData.description}
            onChange={handleDescriptionChange}
            className="quill-edito overflow-auto"
            theme="snow"
            placeholder="Write the product description here..."
          />
        </div>
      </FormSection>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
};

export default ProductForm;
// const ProductForm = ({
//   formData,
//   handleChange,
//   handleDescriptionChange,
//   errorMessage,
// }) => {
//   return (
//     <div>
//       <FormSection title="Product Details">
//         <FormInput
//           label="Product Name"
//           name="name"
//           type="text"
//           placeholder="Product Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <div className="flex flex-col mt-4">
//           <label className="font-semibold">Product Description</label>
//           <ReactQuill
//             name="description"
//             value={formData.description}
//             onChange={handleDescriptionChange}
//             className="quill-editor"
//             theme="snow"
//             placeholder="Write the product description here..."
//           />
//         </div>
//       </FormSection>
//       {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
//     </div>
//   );
// };

// export default ProductForm;