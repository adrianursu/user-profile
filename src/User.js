function User({ image,
                btn1, btn2,
                heading1, description1, heading2, description2, heading3, description3,
                userName, age, city, country,
                role, studies, footerDescription, footerLink }) {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                        <a href="/">
                            <img src={image} className="rounded-circle" alt="profile_img" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                    <a href="/" className="btn btn-sm btn-info mr-4">{btn1}</a>
                    <a href="/" className="btn btn-sm btn-default float-right">{btn2}</a>
                </div>
            </div>
            <div className="card-body pt-0 pt-md-4">
                <div className="row">
                    <div className="col">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-5 pt-4 py-4">
                            <div>
                                <span className="heading" >{heading1}</span>
                                <span className="description">{description1}</span>
                            </div>
                            <div>
                                <span className="heading">{heading2}</span>
                                <span className="description">{description2}</span>
                            </div>
                            <div>
                                <span className="heading">{heading3}</span>
                                <span className="description">{description3}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h3>
                        {userName}<span className="font-weight-light">, {age}</span>
                    </h3>
                    <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2" />{city}, {country}
                    </div>
                    <div className="h5 mt-4">
                        <i className="ni business_briefcase-24 mr-2" />{role}
                    </div>
                    <div>
                        <i className="ni education_hat mr-2" />{studies}
                    </div>
                    <hr className="my-4" />
                    <p>{footerDescription}</p>
                    <a href="/">{footerLink}</a>
                </div>
            </div>
        </div >






    )
}

export default User;