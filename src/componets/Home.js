import React from "react";
import { NavLink } from "react-router-dom";
import a from "./a.jpg";

import slider1 from "./img/slider/slider1.jpg";
import slider2 from "./img/slider/slider2.jpg";
import aaaa from "./img/small/aaaa.jpg";
import bbbb from "./img/small/bbbb.jpg";
import cccc from "./img/small/cccc.jpg";
import dddd from "./img/small/dddd.jpg";
import eeee from "./img/small/eeee.jpg";
import ffff from "./img/small/ffff.jpg";
import gggg from "./img/small/gggg.jpg";
import hhhh from "./img/small/hhhh.jpg";
import iiii from "./img/small/iiii.jpg";
import kkkk from "./img/small/kkkk.jpg";
import jjjj from "./img/small/jjjj.jpg";
import aa from "./img/item/aa.jpg";
import bb from "./img/item/bb.jpg";
import cc from "./img/item/cc.jpg";
import dd from "./img/item/dd.jpg";
import ee from "./img/item/ee.jpg";
import ff from "./img/item/ff.jpg";
import gg from "./img/item/gg.jpg";
import hh from "./img/item/hh.jpg";
import ii from "./img/item/ii.jpg";
import jj from "./img/item/jj.jpg";
import kk from "./img/item/kk.jpg";
import ll from "./img/item/ll.jpg";
import one from "./img/ad/one.jpg";
import opa from "./img/small/opa.jpg";
import opb from "./img/small/opb.jpg";
import opc from "./img/small/opc.jpg";
import opd from "./img/small/opd.jpg";

import "./alls.css";

//component
import FruitsnVegetable from "./FruitsnVegetable";
import Checkout from "./Checkout";
export default function Home() {
    return (
        <div>
            <section className="top-category section-padding">
                <div className="container">
                    <div
                        className="owl-carousel owl-carousel-category new_nake"
                        id="new_nake"
                    >
                        <div className="item">
                            <div className="category-item">
                                <NavLink to="FruitsnVegetable">
                                    <img
                                        className="img-fluid"
                                        src={aaaa}
                                        alt=""
                                    />
                                    <h6>Fruits & Vegetables</h6>
                                    <p>150 Items</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <NavLink to="FruitsnVegetable">
                                    <img
                                        className="img-fluid"
                                        src={bbbb}
                                        alt=""
                                    />
                                    <h6>Grocery & Staples</h6>
                                    <p>95 Items</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <NavLink to="FruitsnVegetable">
                                    <img
                                        className="img-fluid"
                                        src={cccc}
                                        alt=""
                                    />
                                    <h6>Beverages</h6>
                                    <p>65 Items</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <NavLink to="FruitsnVegetable">
                                    <img
                                        className="img-fluid"
                                        src={dddd}
                                        alt=""
                                    />
                                    <h6>Home & Kitchen</h6>
                                    <p>965 Items</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <NavLink to="FruitsnVegetable">
                                    <img
                                        className="img-fluid"
                                        src={eeee}
                                        alt=""
                                    />
                                    <h6>Furnishing & Home Needs</h6>
                                    <p>125 Items</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <NavLink to="FruitsnVegetable">
                                    <img
                                        className="img-fluid"
                                        src={ffff}
                                        alt=""
                                    />
                                    <h6>Household Needs</h6>
                                    <p>325 Items</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <NavLink to="FruitsnVegetable">
                                    <img
                                        className="img-fluid"
                                        src={eeee}
                                        alt=""
                                    />
                                    <h6>Personal Care</h6>
                                    <p>156 Items</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <NavLink to="FruitsnVegetable">
                                    <img
                                        className="img-fluid"
                                        src={gggg}
                                        alt=""
                                    />
                                    <h6>Breakfast & Dairy</h6>
                                    <p>857 Items</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <NavLink to="FruitsnVegetable">
                                    <img
                                        className="img-fluid"
                                        src={hhhh}
                                        alt=""
                                    />
                                    <h6>Biscuits, Snacks & Chocolates</h6>
                                    <p>48 Items</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <NavLink to="FruitsnVegetable">
                                    <img
                                        className="img-fluid"
                                        src={iiii}
                                        alt=""
                                    />
                                    <h6>Noodles, Sauces & Instant Food</h6>
                                    <p>156 Items</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <NavLink to="FruitsnVegetable">
                                    <img
                                        className="img-fluid"
                                        src={jjjj}
                                        alt=""
                                    />
                                    <h6>Pet Care</h6>
                                    <p>568 Items</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <NavLink to="FruitsnVegetable">
                                    <img
                                        className="img-fluid"
                                        src={kkkk}
                                        alt=""
                                    />
                                    <h6>Meats, Frozen & Seafood</h6>
                                    <p>156 Items</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="carousel-slider-main text-center border-top border-bottom bg-white">
                <div className="owl-carousel owl-carousel-slider">
                    <div className="item">
                        <NavLink to="FruitsnVegetable">
                            <img
                                className="img-fluid"
                                src={slider1}
                                alt="First slide"
                            />
                        </NavLink>
                    </div>
                    <div className="item">
                        <NavLink to="FruitsnVegetable">
                            <img
                                className="img-fluid"
                                src={slider2}
                                alt="First slide"
                            />
                        </NavLink>
                    </div>
                    <div className="item">
                        <NavLink to="FruitsnVegetable">
                            <img
                                className="img-fluid"
                                src={slider1}
                                alt="First slide"
                            />
                        </NavLink>
                    </div>
                    <div className="item">
                        <NavLink to="FruitsnVegetable">
                            <img
                                className="img-fluid"
                                src={slider2}
                                alt="First slide"
                            />
                        </NavLink>
                    </div>
                </div>
            </section>

            <section class="product-items-slider section-padding">
                <div class="container">
                    <div class="section-header">
                        <h5 class="heading-design-h5">
                            SHOP BY CATEGORY{" "}
                            <span class="badge badge-primary">20% OFF</span>
                            <NavLink
                                className="float-right text-secondary"
                                to="FruitsnVegetable"
                            >
                                View All
                            </NavLink>
                        </h5>
                    </div>
                    <div class="row all_cat_row">
                        <div class="col-md-3">
                            <img class="all_cat" src={opa} />
                            <div class="pr_tag">
                                <h4 class="mb-0">Mandi Combo</h4>
                                <p class="mb-0">5 PRODUCTS</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <img class="all_cat" src={opb} />
                            <div class="pr_tag">
                                <h4 class="mb-0">Mandi Combo</h4>
                                <p class="mb-0">5 PRODUCTS</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <img class="all_cat" src={opc} />
                            <div class="pr_tag">
                                <h4 class="mb-0">Mandi Combo</h4>
                                <p class="mb-0">5 PRODUCTS</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <img class="all_cat" src={opd} />
                            <div class="pr_tag">
                                <h4 class="mb-0">Mandi Combo</h4>
                                <p class="mb-0">5 PRODUCTS</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <img class="all_cat" src={opa} />
                            <div class="pr_tag">
                                <h4 class="mb-0">Mandi Combo</h4>
                                <p class="mb-0">5 PRODUCTS</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <img class="all_cat" src={opb} />
                            <div class="pr_tag">
                                <h4 class="mb-0">Mandi Combo</h4>
                                <p class="mb-0">5 PRODUCTS</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <img class="all_cat" src={opc} />
                            <div class="pr_tag">
                                <h4 class="mb-0">Mandi Combo</h4>
                                <p class="mb-0">5 PRODUCTS</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <img class="all_cat" src={opd} />
                            <div class="pr_tag">
                                <h4 class="mb-0">Mandi Combo</h4>
                                <p class="mb-0">5 PRODUCTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="	">
                <div className="container">
                    <div className="section-header">
                        <h5 className="heading-design-h5">
                            Top Savers Today{" "}
                            <span className="badge badge-primary">20% OFF</span>
                            <NavLink
                                className="float-right text-secondary"
                                to="FruitsnVegetable"
                            >
                                View All
                            </NavLink>
                        </h5>
                    </div>
                    <div className="owl-carousel owl-carousel-featured">
                        <div className="item">
                            <div className="product">
                                <NavLink to="FruitsnVegetable">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={aa}
                                            alt=""
                                        />
                                        <span className="veg text-success mdi mdi-circle"></span>
                                    </div>
                                    <div className="product-body">
                                        <h5>Product Title Here</h5>
                                        <h6>
                                            <strong>
                                                <span className="mdi mdi-approval"></span>{" "}
                                                Available in
                                            </strong>{" "}
                                            - 500 gm
                                        </h6>
                                    </div>
                                    <div className="product-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm float-right"
                                        >
                                            <i className="mdi mdi-cart-outline"></i>{" "}
                                            Add To Cart
                                        </button>
                                        <p className="offer-price mb-0">
                                            $450.99{" "}
                                            <i className="mdi mdi-tag-outline"></i>
                                            <br />
                                            <span className="regular-price">
                                                $800.99
                                            </span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product">
                                <NavLink to="FruitsnVegetable">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={aa}
                                            alt=""
                                        />
                                        <span className="non-veg text-danger mdi mdi-circle"></span>
                                    </div>
                                    <div className="product-body">
                                        <h5>Product Title Here</h5>
                                        <h6>
                                            <strong>
                                                <span className="mdi mdi-approval"></span>{" "}
                                                Available in
                                            </strong>{" "}
                                            - 500 gm
                                        </h6>
                                    </div>
                                    <div className="product-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm float-right"
                                        >
                                            <i className="mdi mdi-cart-outline"></i>{" "}
                                            Add To Cart
                                        </button>
                                        <p className="offer-price mb-0">
                                            $450.99{" "}
                                            <i className="mdi mdi-tag-outline"></i>
                                            <br />
                                            <span className="regular-price">
                                                $800.99
                                            </span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product">
                                <NavLink to="FruitsnVegetable">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={cc}
                                            alt=""
                                        />
                                        <span className="non-veg text-danger mdi mdi-circle"></span>
                                    </div>
                                    <div className="product-body">
                                        <h5>Product Title Here</h5>
                                        <h6>
                                            <strong>
                                                <span className="mdi mdi-approval"></span>{" "}
                                                Available in
                                            </strong>{" "}
                                            - 500 gm
                                        </h6>
                                    </div>
                                    <div className="product-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm float-right"
                                        >
                                            <i className="mdi mdi-cart-outline"></i>{" "}
                                            Add To Cart
                                        </button>
                                        <p className="offer-price mb-0">
                                            $450.99{" "}
                                            <i className="mdi mdi-tag-outline"></i>
                                            <br />
                                            <span className="regular-price">
                                                $800.99
                                            </span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product">
                                <NavLink to="FruitsnVegetable">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={dd}
                                            alt=""
                                        />
                                        <span className="veg text-success mdi mdi-circle"></span>
                                    </div>
                                    <div className="product-body">
                                        <h5>Product Title Here</h5>
                                        <h6>
                                            <strong>
                                                <span className="mdi mdi-approval"></span>{" "}
                                                Available in
                                            </strong>{" "}
                                            - 500 gm
                                        </h6>
                                    </div>
                                    <div className="product-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm float-right"
                                        >
                                            <i className="mdi mdi-cart-outline"></i>{" "}
                                            Add To Cart
                                        </button>
                                        <p className="offer-price mb-0">
                                            $450.99{" "}
                                            <i className="mdi mdi-tag-outline"></i>
                                            <br />
                                            <span className="regular-price">
                                                $800.99
                                            </span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product">
                                <NavLink to="FruitsnVegetable">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={ee}
                                            alt=""
                                        />
                                        <span className="veg text-success mdi mdi-circle"></span>
                                    </div>
                                    <div className="product-body">
                                        <h5>Product Title Here</h5>
                                        <h6>
                                            <strong>
                                                <span className="mdi mdi-approval"></span>{" "}
                                                Available in
                                            </strong>{" "}
                                            - 500 gm
                                        </h6>
                                    </div>
                                    <div className="product-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm float-right"
                                        >
                                            <i className="mdi mdi-cart-outline"></i>{" "}
                                            Add To Cart
                                        </button>
                                        <p className="offer-price mb-0">
                                            $450.99{" "}
                                            <i className="mdi mdi-tag-outline"></i>
                                            <br />
                                            <span className="regular-price">
                                                $800.99
                                            </span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product">
                                <NavLink to="FruitsnVegetable">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={ff}
                                            alt=""
                                        />
                                        <span className="veg text-success mdi mdi-circle"></span>
                                    </div>
                                    <div className="product-body">
                                        <h5>Product Title Here</h5>
                                        <h6>
                                            <strong>
                                                <span className="mdi mdi-approval"></span>{" "}
                                                Available in
                                            </strong>{" "}
                                            - 500 gm
                                        </h6>
                                    </div>
                                    <div className="product-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm float-right"
                                        >
                                            <i className="mdi mdi-cart-outline"></i>{" "}
                                            Add To Cart
                                        </button>
                                        <p className="offer-price mb-0">
                                            $450.99{" "}
                                            <i className="mdi mdi-tag-outline"></i>
                                            <br />
                                            <span className="regular-price">
                                                $800.99
                                            </span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="offer-product">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <NavLink to="FruitsnVegetable">
                                <img className="img-fluid" src={gg} alt="" />
                            </NavLink>
                        </div>
                        <div className="col-md-6">
                            <NavLink to="#">
                                <img className="img-fluid" src={one} alt="" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product-items-slider section-padding">
                <div className="container">
                    <div className="section-header">
                        <h5 className="heading-design-h5">
                            Best Offers View{" "}
                            <span className="badge badge-info">20% OFF</span>
                            <NavLink
                                className="float-right text-secondary"
                                to="FruitsnVegetable"
                            >
                                View All
                            </NavLink>
                        </h5>
                    </div>
                    <div className="owl-carousel owl-carousel-featured">
                        <div className="item">
                            <div className="product">
                                <NavLink to="FruitsnVegetable">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={ff}
                                            alt=""
                                        />
                                        <span className="veg text-success mdi mdi-circle"></span>
                                    </div>
                                    <div className="product-body">
                                        <h5>Product Title Here</h5>
                                        <h6>
                                            <strong>
                                                <span className="mdi mdi-approval"></span>{" "}
                                                Available in
                                            </strong>{" "}
                                            - 500 gm
                                        </h6>
                                    </div>
                                    <div className="product-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm float-right"
                                        >
                                            <i className="mdi mdi-cart-outline"></i>{" "}
                                            Add To Cart
                                        </button>
                                        <p className="offer-price mb-0">
                                            $450.99{" "}
                                            <i className="mdi mdi-tag-outline"></i>
                                            <br />
                                            <span className="regular-price">
                                                $800.99
                                            </span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product">
                                <NavLink to="FruitsnVegetable">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={kk}
                                            alt=""
                                        />
                                        <span className="non-veg text-danger mdi mdi-circle"></span>
                                    </div>
                                    <div className="product-body">
                                        <h5>Product Title Here</h5>
                                        <h6>
                                            <strong>
                                                <span className="mdi mdi-approval"></span>{" "}
                                                Available in
                                            </strong>{" "}
                                            - 500 gm
                                        </h6>
                                    </div>
                                    <div className="product-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm float-right"
                                        >
                                            <i className="mdi mdi-cart-outline"></i>{" "}
                                            Add To Cart
                                        </button>
                                        <p className="offer-price mb-0">
                                            $450.99{" "}
                                            <i className="mdi mdi-tag-outline"></i>
                                            <br />
                                            <span className="regular-price">
                                                $800.99
                                            </span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product">
                                <NavLink to="FruitsnVegetable">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={ll}
                                            alt=""
                                        />
                                        <span className="non-veg text-danger mdi mdi-circle"></span>
                                    </div>
                                    <div className="product-body">
                                        <h5>Product Title Here</h5>
                                        <h6>
                                            <strong>
                                                <span className="mdi mdi-approval"></span>{" "}
                                                Available in
                                            </strong>{" "}
                                            - 500 gm
                                        </h6>
                                    </div>
                                    <div className="product-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm float-right"
                                        >
                                            <i className="mdi mdi-cart-outline"></i>{" "}
                                            Add To Cart
                                        </button>
                                        <p className="offer-price mb-0">
                                            $450.99{" "}
                                            <i className="mdi mdi-tag-outline"></i>
                                            <br />
                                            <span className="regular-price">
                                                $800.99
                                            </span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product">
                                <NavLink to="FruitsnVegetable">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={jj}
                                            alt=""
                                        />
                                        <span className="veg text-success mdi mdi-circle"></span>
                                    </div>
                                    <div className="product-body">
                                        <h5>Product Title Here</h5>
                                        <h6>
                                            <strong>
                                                <span className="mdi mdi-approval"></span>{" "}
                                                Available in
                                            </strong>{" "}
                                            - 500 gm
                                        </h6>
                                    </div>
                                    <div className="product-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm float-right"
                                        >
                                            <i className="mdi mdi-cart-outline"></i>{" "}
                                            Add To Cart
                                        </button>
                                        <p className="offer-price mb-0">
                                            $450.99{" "}
                                            <i className="mdi mdi-tag-outline"></i>
                                            <br />
                                            <span className="regular-price">
                                                $800.99
                                            </span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product">
                                <NavLink to="FruitsnVegetable">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={ll}
                                            alt=""
                                        />
                                        <span className="veg text-success mdi mdi-circle"></span>
                                    </div>
                                    <div className="product-body">
                                        <h5>Product Title Here</h5>
                                        <h6>
                                            <strong>
                                                <span className="mdi mdi-approval"></span>{" "}
                                                Available in
                                            </strong>{" "}
                                            - 500 gm
                                        </h6>
                                    </div>
                                    <div className="product-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm float-right"
                                        >
                                            <i className="mdi mdi-cart-outline"></i>{" "}
                                            Add To Cart
                                        </button>
                                        <p className="offer-price mb-0">
                                            $450.99{" "}
                                            <i className="mdi mdi-tag-outline"></i>
                                            <br />
                                            <span className="regular-price">
                                                $800.99
                                            </span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product">
                                <NavLink to="FruitsnVegetable">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={hh}
                                            alt=""
                                        />
                                        <span className="veg text-success mdi mdi-circle"></span>
                                    </div>
                                    <div className="product-body">
                                        <h5>Product Title Here</h5>
                                        <h6>
                                            <strong>
                                                <span className="mdi mdi-approval"></span>{" "}
                                                Available in
                                            </strong>{" "}
                                            - 500 gm
                                        </h6>
                                    </div>
                                    <div className="product-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm float-right"
                                        >
                                            <i className="mdi mdi-cart-outline"></i>{" "}
                                            Add To Cart
                                        </button>
                                        <p className="offer-price mb-0">
                                            $450.99{" "}
                                            <i className="mdi mdi-tag-outline"></i>
                                            <br />
                                            <span className="regular-price">
                                                $800.99
                                            </span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="feature-box">
                                <i className="mdi mdi-truck-fast"></i>
                                <h6>Free & Next Day Delivery</h6>
                                <p>Lorem ipsum dolor sit amet, cons...</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="feature-box">
                                <i className="mdi mdi-basket"></i>
                                <h6>100% Satisfaction Guarantee</h6>
                                <p>Rorem Ipsum Dolor sit amet, cons...</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="feature-box">
                                <i className="mdi mdi-tag-heart"></i>
                                <h6>Great Daily Deals Discount</h6>
                                <p>Sorem Ipsum Dolor sit amet, Cons...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding footer bg-white border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <h4 className="mb-5 mt-0">
                                <NavLink className="logo" to="/">
                                    <img
                                        src="img/logo-footer2.png"
                                        alt="Groci"
                                    />
                                </NavLink>
                            </h4>
                            <p className="mb-0">
                                <NavLink className="text-dark" to="#">
                                    <i className="mdi mdi-phone"></i> +61 525
                                    240 310
                                </NavLink>
                            </p>
                            <p className="mb-0">
                                <NavLink className="text-dark" to="#">
                                    <i className="mdi mdi-cellphone-iphone"></i>{" "}
                                    12345 67890, 56847-98562
                                </NavLink>
                            </p>
                            <p className="mb-0">
                                <NavLink className="text-success" to="#">
                                    <i className="mdi mdi-email"></i>{" "}
                                    <span
                                        className="__cf_email__"
                                        data-cfemail="1079717d7f637178717e50777d71797c3e737f7d"
                                    >
                                        [email&#160;protected]
                                    </span>
                                </NavLink>
                            </p>
                            <p className="mb-0">
                                <NavLink className="text-primary" to="#">
                                    <i className="mdi mdi-web"></i>{" "}
                                    harry@
                                </NavLink>
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-2">
                            <h6 className="mb-4">TOP CITIES </h6>
                            <ul>
                                <li>
                                    <NavLink to="#">New Delhi</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Bengaluru</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Hyderabad</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Kolkata</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Gurugram</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-2">
                            <h6 className="mb-4">CATEGORIES</h6>
                            <ul>
                                <li>
                                    <NavLink to="#">Vegetables</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Grocery & Staples</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Breakfast & Dairy</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Soft Drinks</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Biscuits & Cookies</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-2">
                            <h6 className="mb-4">ABOUT US</h6>
                            <ul>
                                <li>
                                    <NavLink to="#">
                                        Company Information
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Careers</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Store Location</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Affillate Program</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Copyright</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <h6 className="mb-4">Download App</h6>
                            <div className="app">
                                <NavLink to="#">
                                    <img src="img/google.png" alt="" />
                                </NavLink>
                                <NavLink to="#">
                                    <img src="img/apple.png" alt="" />
                                </NavLink>
                            </div>
                            <h6 className="mb-3 mt-4">GET IN TOUCH</h6>
                            <div className="footer-social">
                                <NavLink className="btn-facebook" to="#">
                                    <i className="mdi mdi-facebook"></i>
                                </NavLink>
                                <NavLink className="btn-twitter" to="#">
                                    <i className="mdi mdi-twitter"></i>
                                </NavLink>
                                <NavLink className="btn-instagram" to="#">
                                    <i className="mdi mdi-instagram"></i>
                                </NavLink>
                                <NavLink className="btn-whatsapp" to="#">
                                    <i className="mdi mdi-whatsapp"></i>
                                </NavLink>
                                <NavLink className="btn-messenger" to="#">
                                    <i className="mdi mdi-facebook-messenger"></i>
                                </NavLink>
                                <NavLink className="btn-google" to="#">
                                    <i className="mdi mdi-google"></i>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-4 pb-4 footer-bottom">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-sm-6">
                            <p className="mt-1 mb-0">
                                &copy; Copyright 2020{" "}
                                <strong className="text-dark">Groci</strong>.
                                All Rights Reserved
                                <br />
                                <small className="mt-0 mb-0">
                                    Made with{" "}
                                    <i className="mdi mdi-heart text-danger"></i>{" "}
                                    by{" "}
                                    <NavLink
                                        to="https://harry.com"
                                        target="_blank"
                                        className="text-primary"
                                    >
                                       Harry
                                    </NavLink>
                                </small>
                            </p>
                        </div>
                        <div className="col-lg-6 col-sm-6 text-right">
                            <img
                                alt="osahan logo"
                                src="img/payment_methods.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="cart-sidebar">
                <div className="cart-sidebar-header">
                    <h5>
                        My Cart <span className="text-success">(5 item)</span>{" "}
                        <NavLink
                            data-toggle="offcanvas"
                            className="float-right"
                            to="#"
                        >
                            <i className="mdi mdi-close"></i>
                        </NavLink>
                    </h5>
                </div>
                <div className="cart-sidebar-body">
                    <div className="cart-list-product">
                        <NavLink className="float-right remove-cart" to="#">
                            <i className="mdi mdi-close"></i>
                        </NavLink>
                        <img
                            className="img-fluid"
                            src="img/item/11.jpg"
                            alt=""
                        />
                        <span className="badge badge-success">50% OFF</span>
                        <h5>
                            <NavLink to="">Product Title Here</NavLink>
                        </h5>
                        <h6>
                            <strong>
                                <span className="mdi mdi-approval"></span>{" "}
                                Available in
                            </strong>{" "}
                            - 500 gm
                        </h6>
                        <p className="offer-price mb-0">
                            $450.99 <i className="mdi mdi-tag-outline"></i>{" "}
                            <span className="regular-price">$800.99</span>
                        </p>
                    </div>
                    <div className="cart-list-product">
                        <NavLink className="float-right remove-cart" to="">
                            <i className="mdi mdi-close"></i>
                        </NavLink>
                        <img
                            className="img-fluid"
                            src="img/item/7.jpg"
                            alt=""
                        />
                        <span className="badge badge-success">50% OFF</span>
                        <h5>
                            <NavLink to="">Product Title Here</NavLink>
                        </h5>
                        <h6>
                            <strong>
                                <span className="mdi mdi-approval"></span>{" "}
                                Available in
                            </strong>{" "}
                            - 500 gm
                        </h6>
                        <p className="offer-price mb-0">
                            $450.99 <i className="mdi mdi-tag-outline"></i>{" "}
                            <span className="regular-price">$800.99</span>
                        </p>
                    </div>
                    <div className="cart-list-product">
                        <NavLink className="float-right remove-cart" to="#">
                            <i className="mdi mdi-close"></i>
                        </NavLink>
                        <img
                            className="img-fluid"
                            src="img/item/9.jpg"
                            alt=""
                        />
                        <span className="badge badge-success">50% OFF</span>
                        <h5>
                            <NavLink to="#">Product Title Here</NavLink>
                        </h5>
                        <h6>
                            <strong>
                                <span className="mdi mdi-approval"></span>{" "}
                                Available in
                            </strong>{" "}
                            - 500 gm
                        </h6>
                        <p className="offer-price mb-0">
                            $450.99 <i className="mdi mdi-tag-outline"></i>{" "}
                            <span className="regular-price">$800.99</span>
                        </p>
                    </div>
                    <div className="cart-list-product">
                        <NavLink className="float-right remove-cart" to="#">
                            <i className="mdi mdi-close"></i>
                        </NavLink>
                        <img
                            className="img-fluid"
                            src="img/item/1.jpg"
                            alt=""
                        />
                        <span className="badge badge-success">50% OFF</span>
                        <h5>
                            <NavLink to="">Product Title Here</NavLink>
                        </h5>
                        <h6>
                            <strong>
                                <span className="mdi mdi-approval"></span>{" "}
                                Available in
                            </strong>{" "}
                            - 500 gm
                        </h6>
                        <p className="offer-price mb-0">
                            $450.99 <i className="mdi mdi-tag-outline"></i>{" "}
                            <span className="regular-price">$800.99</span>
                        </p>
                    </div>
                    <div className="cart-list-product">
                        <NavLink className="float-right remove-cart" to="#">
                            <i className="mdi mdi-close"></i>
                        </NavLink>
                        <img
                            className="img-fluid"
                            src="img/item/2.jpg"
                            alt=""
                        />
                        <span className="badge badge-success">50% OFF</span>
                        <h5>
                            <NavLink to="#">Product Title Here</NavLink>
                        </h5>
                        <h6>
                            <strong>
                                <span className="mdi mdi-approval"></span>{" "}
                                Available in
                            </strong>{" "}
                            - 500 gm
                        </h6>
                        <p className="offer-price mb-0">
                            $450.99 <i className="mdi mdi-tag-outline"></i>{" "}
                            <span className="regular-price">$800.99</span>
                        </p>
                    </div>
                </div>
                <div className="cart-sidebar-footer">
                    <div className="cart-store-details">
                        <p>
                            Sub Total{" "}
                            <strong className="float-right">$900.69</strong>
                        </p>
                        <p>
                            Delivery Charges{" "}
                            <strong className="float-right text-danger">
                                + $29.69
                            </strong>
                        </p>
                        <h6>
                            Your total savings{" "}
                            <strong className="float-right text-danger">
                                $55 (42.31%)
                            </strong>
                        </h6>
                    </div>
                    <NavLink to="Checkout">
                        <button
                            className="btn btn-secondary btn-lg btn-block text-left"
                            type="button"
                        >
                            <span className="float-left">
                                <i className="mdi mdi-cart-outline"></i> Proceed
                                to Checkout{" "}
                            </span>
                            <span className="float-right">
                                <strong>$1200.69</strong>{" "}
                                <span className="mdi mdi-chevron-right"></span>
                            </span>
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
