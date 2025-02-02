import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";

const TestimonialCard = ({ testimonial, index, setNumber }) => {
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleUpdateInfo = (data) => {
    const name = data.name || testimonial.name;
    const _id = testimonial._id;
    const jobTitle = data.jobTitle || testimonial.jobTitle;
    const review = data.review || testimonial.review;

    const newData = {
      name,
      _id,
      jobTitle,
      review,
      img: testimonial.img,
      uploadImage: false,
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("jobTitle", jobTitle);
    formData.append("review", review);
    formData.append("_id", _id);

    if (file === null) {
      fetch("https://sleepy-mesa-08037.herokuapp.com/testimonials/update", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then((data) => {
          setNumber((prvState) => prvState + 1);
        });
    } else {
      fetch("https://sleepy-mesa-08037.herokuapp.com/testimonials/update", {
        method: "PUT",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setNumber((prvState) => prvState + 1);
        });
    }
  };

  let imgType;
  if (testimonial.img.contentType === "image/svg+xml") {
    imgType = "data:image/svg+xml";
  } else if (testimonial.img.contentType === "image/png") {
    imgType = "data:image/png";
  } else {
    imgType = "data:image/jpg";
  }

  return (
    <>
      <div className="col-12 col-md-6  mx-auto my-3">
        <div className="p-5 text-center mx-2 boxShadow cursor-pointer h-100">
          <AiFillEdit
            size={24}
            className="text-warning d-block ms-auto"
            data-bs-toggle="modal"
            data-bs-target={`#testimonial${index + 1}`}
          />
          <Image
            src={`${imgType} ; base64, ${testimonial.img.img}`}
            alt="Loading..."
            width="70"
            height="70"
            className="rounded-circle borderColor "
          />
          <p className="fst-italic my-3 fs-14 lh-lg">“{testimonial.review}”</p>
          <h6 className="fw-bold fs-18">{testimonial.name}</h6>
          <p className="fs-14">{testimonial.jobTitle}</p>
        </div>
      </div>

      {/* Modal start here */}
      <div
        className="modal fade"
        id={`testimonial${index + 1}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Banner
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(handleUpdateInfo)}>
                <label htmlFor="name">Name</label>
                <textarea
                  rows="1"
                  cols="1"
                  defaultValue={testimonial.name}
                  {...register("name")}
                  name="name"
                  id="name"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="jobTitle">Job Title</label>
                <textarea
                  rows="1"
                  cols="1"
                  defaultValue={testimonial.jobTitle}
                  {...register("jobTitle")}
                  name="jobTitle"
                  id="jobTitle"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="review">Review</label>
                <textarea
                  rows="5"
                  cols="1"
                  defaultValue={testimonial.review}
                  {...register("review")}
                  name="review"
                  id="review"
                  className="form-control mb-2"
                ></textarea>
                <input
                  type="file"
                  className="form-control mb-2"
                  name="file"
                  onChange={handleFileChange}
                  id="img"
                />
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Save Changes"
                  data-bs-dismiss="modal"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
