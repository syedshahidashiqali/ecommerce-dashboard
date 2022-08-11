import { useParams } from "react-router-dom";
import { ALLREVIEWS, PRODUCT } from "../assets/Helpers/apiUrls";
import { useGetApi } from "../assets/Hooks/useGetApi";
import { ratingFilter } from "../assets/Utils/helpers";
import Moment from "react-moment";

function Reviews() {
  const { productId } = useParams();
  const reviews = useGetApi(`${ALLREVIEWS}/${productId}`);
  const product = useGetApi(`${PRODUCT}/${productId}`);

  const stars5 = ratingFilter(reviews?.detail, 5);
  const stars4 = ratingFilter(reviews?.detail, 4);
  const stars3 = ratingFilter(reviews?.detail, 3);
  const stars2 = ratingFilter(reviews?.detail, 2);
  const stars1 = ratingFilter(reviews?.detail, 1);
  return (
    <>
      <h3 className="pull-left bold uppercase black mt-2">Products</h3>
      <div className="clearfix" />
      <div className="row align-items-center mt-3">
        {/* <img
          src="/images/review-1.png"
          alt=""
          className="ml-1 img-fluid review-img"
        />
        <div className="ml-1">
          <a href="" className="p_sm medium">
            View Profile
          </a>
          <p className="p_sm l-grey">Mark Carson</p>
        </div> */}
      </div>
      <hr />
      <div className="clearfix" />
      <h4 className="pull-left medium p_lg black">{product?.detail?.name}</h4>
      <div className="clearfix" />
      <div className="row">
        <div className="col-xl-2 col-md-3">
          <img src="/images/product.png" alt="" className="img-fluid mt-1" />
          <div className="d-flex">
            <img src="/images/dairy-milk.png" alt="" className="img-fluid" />
            <img src="/images/dairy-milk.png" alt="" className="img-fluid " />
            <img src="/images/dairy-milk.png" alt="" className="img-fluid " />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="mt-2 col-lg-2 col-md-3">
          <h4 className="p_sm black bold mt-1">Price:</h4>
          <h4 className="p_sm black bold mt-1">Description:</h4>
        </div>
        <div className="mt-2 col-lg-2 col-md-3">
          <h4 className="p_sm l-grey bold mt-1">${product?.detail?.price}</h4>
          <h4 className="p_sm l-grey bold mt-1">
            {product?.detail?.description}
          </h4>
        </div>
      </div>
      <div className="row align-items-center mt-2">
        <p className="p_md clr-orange medium ml-1">(2.9/5)</p>
        <div className="rating ml-1">
          <input type="radio" id="star5" name="rating" defaultValue={5} />
          <label htmlFor="star5" title="Meh">
            5 stars
          </label>
          <input type="radio" id="star4" name="rating" defaultValue={4} />
          <label htmlFor="star4" title="Kinda bad">
            4 stars
          </label>
          <input type="radio" id="star3" name="rating" defaultValue={3} />
          <label htmlFor="star3" title="Kinda bad">
            3 stars
          </label>
          <input type="radio" id="star2" name="rating" defaultValue={2} />
          <label htmlFor="star2" title="Sucks big tim">
            2 stars
          </label>
          <input type="radio" id="star1" name="rating" defaultValue={1} />
          <label htmlFor="star1" title="Sucks big time">
            1 star
          </label>
        </div>
      </div>
      <div className="row align-items-center">
        <p className="p_md clr-orange ml-1">{stars5}</p>
        <div className="ml-2">
          <i className="fas fa-star clr-orange" />
          <i className="fas fa-star clr-orange" />
          <i className="fas fa-star clr-orange" />
          <i className="fas fa-star clr-orange" />
          <i className="fas fa-star clr-orange" />
        </div>
        <div className="col-xl-3 mt-1 ml-2 col-lg-4 col-sm-7">
          <div className="progress">
            <div
              className="progress-bar bck-orange"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <p className="p_md clr-orange ml-1">{stars4}</p>
        <div className="ml-2">
          <i className="fas fa-star clr-orange" />
          <i className="fas fa-star clr-orange" />
          <i className="fas fa-star clr-orange" />
          <i className="fas fa-star clr-orange" />
          <i className="far fa-star l-grey" />
        </div>
        <div className="col-xl-3 mt-1 ml-2 col-lg-4 col-sm-7">
          <div className="progress">
            <div
              className="progress-bar bck-orange"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <p className="p_md clr-orange ml-1">{stars3}</p>
        <div className="ml-2">
          <i className="fas fa-star clr-orange" />
          <i className="fas fa-star clr-orange" />
          <i className="fas fa-star clr-orange" />
          <i className="far fa-star l-grey" />
          <i className="far fa-star l-grey" />
        </div>
        <div className="col-xl-3 mt-1 ml-2 col-lg-4 col-sm-7">
          <div className="progress">
            <div
              className="progress-bar bck-orange"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <p className="p_md clr-orange ml-1">{stars2}</p>
        <div className="ml-2">
          <i className="fas fa-star clr-orange" />
          <i className="fas fa-star clr-orange" />
          <i className="far fa-star l-grey" />
          <i className="far fa-star l-grey" />
          <i className="far fa-star l-grey" />
        </div>
        <div className="col-xl-3 mt-1 ml-2 col-lg-4 col-sm-7">
          <div className="progress">
            <div
              className="progress-bar bck-orange"
              role="progressbar"
              style={{ width: "40%" }}
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <p className="p_md clr-orange ml-1">{stars1}</p>
        <div className="ml-2">
          <i className="fas fa-star clr-orange" />
          <i className="far fa-star l-grey" />
          <i className="far fa-star l-grey" />
          <i className="far fa-star l-grey" />
          <i className="far fa-star l-grey" />
        </div>
        <div className="col-xl-3 mt-1 ml-2 col-lg-4 col-sm-7">
          <div className="progress">
            <div
              className="progress-bar bck-orange"
              role="progressbar"
              style={{ width: "20%" }}
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
      <h4 className="p_sm mt-2 black bold">
        {reviews?.detail?.length} Reviews
      </h4>
      <hr />
      {reviews?.detail?.map((review) => {
        return (
          <div className="row">
            <div className="col-lg-11">
              <div className="reviews-card p-2">
                <div className="row">
                  <div className="col-xl-6 col-lg-7">
                    <div className="media">
                      <img
                        src="images/review-1.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="media-body ml-1">
                        <h5 className="mt-0 p_sm bold black">
                          {review?.user?.username}
                        </h5>
                        <div className="mt-2">
                          {Array.apply(null, Array(review?.rating))?.map(
                            (rate, index) => {
                              return (
                                <i
                                  className="fas fa-star clr-orange"
                                  key={index}
                                />
                              );
                            }
                          )}
                          {Array.apply(null, Array(5 - review?.rating))?.map(
                            (rate, index) => {
                              return (
                                <i className="far fa-star l-grey" key={index} />
                              );
                            }
                          )}
                        </div>
                        <p className="clr_grey lh medium p_sm">
                          {review?.detail}
                        </p>
                        <p className="p_sm clr_grey mt-1">
                          <Moment format="DD-MM-YYYY">
                            {review?.createdAt}
                          </Moment>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="offset-xl-4 mt-1 text-right offset-lg-2 col-lg-2">
                    <a href="" data-toggle="modal" data-target="#reviewDel">
                      <button className="px-1 py-1">
                        <i className="fas fa-trash" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Reviews;
