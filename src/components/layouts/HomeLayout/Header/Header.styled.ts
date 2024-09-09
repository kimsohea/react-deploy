import styled from "styled-components";

export const HeaderBuffer = styled.div`
  width: 1200px;
  height: 60px;

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 5rem;
  }
`;

export const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 1200px;
  height: fit-content;
  display: flex;
  justify-content: center;
  background-color: #fff;
  box-sizing: border-box;
  z-index: 10;

  .header_wrap {
    position: absolute;
    display: flex;
    width: 1200px;
    align-items: center;
    justify-content: space-between;
    padding-left: 100px;
    box-sizing: border-box;
    background-color: #fff;

    .header_logo {
      position: absolute;
      top: 50%;
      left: 0;
      height: 100%;
      transform: translateY(-50%);
      z-index: 10;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 20px;
        width: 100%;
        height: 100%;
      }

      img {
        width: 80px;
      }
    }

    .header_category {
      display: flex;

      > li {
        > a {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          font-size: 1.4rem;
        }

        > ul {
          position: absolute;
          top: 100%;
          left: 100px;
          display: none;
          flex-direction: column;
          justify-content: center;
          width: 150px;
          z-index: 1;

          > li {
            font-size: 1.4rem;

            > a {
              display: flex;
              width: 150px;
              padding: 1rem 2rem;
              box-sizing: border-box;
            }

            > ul {
              position: absolute;
              top: 0;
              left: 150px;
              display: none;
              width: 180px;
              height: 450px;
              flex-wrap: wrap;
              flex-direction: column;

              > li {
                width: 100%;
                text-overflow: ellipsis;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;

                > a {
                  display: -webkit-box;
                  align-items: center;
                  padding: 1rem 2rem;
                  font-size: 1.4rem;
                }

                > ul {
                  position: absolute;
                  top: 0;
                  left: 180px;
                  display: none;
                  flex-wrap: wrap;
                  flex-direction: column;
                  height: 450px;

                  &::before {
                    position: absolute;
                    top: 10px;
                    left: 0;
                    content: "";
                    width: 1px;
                    height: 430px;
                    background-color: #000;
                  }

                  a {
                    display: flex;
                    width: 150px;
                    padding: 1rem 2rem;
                    font-size: 1.4rem;
                  }
                }
              }
            }
          }
        }

        &.active {
          > a {
            position: relative;

            &::before {
              content: "";
              position: absolute;
              left: 50%;
              bottom: 0;
              width: 10px;
              height: 7px;
              background: #000;
              transform: translateX(-50%);
              clip-path: polygon(50% 0, 0% 100%, 100% 100%);
            }
          }

          &::before {
            position: absolute;
            top: calc(100% + 10px);
            left: 250px;
            content: "";
            width: 1px;
            height: 430px;
            background-color: #000;
            z-index: 1;
          }

          &:after {
            position: absolute;
            top: 60px;
            left: 50%;
            width: 100%;
            height: 450px;
            background-color: #f7f8fc;
            transform: translateX(-50%);
            content: "";
          }

          > ul {
            display: flex;

            > li {
              &.active {
                > ul {
                  display: flex;

                  > li {
                    &.active {
                      > ul {
                        display: flex;
                      }
                    }
                  }
                }
              }
            }

            li {
              &.active {
                > a {
                  position: relative;

                  &:before {
                    position: absolute;
                    top: calc(50% - 2.5px);
                    right: 15px;
                    content: "";
                    width: 7px;
                    height: 10px;
                    background-color: #000;
                    clip-path: polygon(0 0, 0% 100%, 100% 50%);
                  }
                }
              }
            }
          }
        }
      }
    }

    .header_myinfo {
      display: flex;
      li {
        a {
          padding: 2rem 1rem;
          font-size: 1.4rem;
          cursor: pointer;
        }
      }
    }
  }

  &.active {
    &::before {
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      height: 450px;
      background-color: #f7f8fc;
      content: "";
    }
  }

  @media screen and (max-width: 640px) {
    position: fixed;
    height: 5rem;
    min-width: initial;

    .header_wrap {
      width: 100%;
      height: 100%;
      padding: 0;

      .header_logo {
        a {
          padding-right: 2rem;
          img {
            width: 8rem;
          }
        }
      }

      .header_category,
      .header_myinfo {
        display: none;
      }
    }
  }
`;

export const MobileCategories = styled.section`
  background-color: #fff;

  &:before {
    position: absolute;
    left: 0;
    bottom: -5rem;
    display: none;
    width: 100%;
    height: 5rem;
    background-color: #fff;
    content: "";
  }

  .cate_btn {
    position: fixed;
    top: 0.5rem;
    right: 1.5rem;
    width: 4rem;
    height: 4rem;
    z-index: 20;

    &::before,
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: #808080;
      width: 3.7rem;
      height: 2.6rem;
      box-sizing: border-box;
      transform: translate(-50%, -50%);
      content: "";
    }

    &::before {
      background-color: transparent;
      border-top: 2px solid #808080;
      border-bottom: 2px solid #808080;
    }

    &::after {
      height: 2px;
    }
  }

  .cate_mobile {
    display: none;

    .cate_logo {
      width: 10rem;
      height: 5rem;
      mix-blend-mode: multiply;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding-right: 2rem;

        img {
          width: 8rem;
        }
      }
    }

    .cate_myinfo {
      display: flex;
      justify-content: center;
      column-gap: 1rem;
      padding: 1rem 0;
      margin-bottom: 0.5rem;
      border-bottom: 1px solid #dedfe4;

      li {
        a {
          display: block;
          padding: 0.5rem;
          font-size: 1.5rem;
          font-family: "Noto Sans KR", sans-serif;
          font-weight: 500;
          color: #000;
        }
      }
    }

    .cate_list {
      display: flex;
      flex-direction: column;

      > li {
        a {
          display: flex;
          align-items: center;
          padding-left: 2rem;
          width: 100%;
          height: 4rem;
          box-sizing: border-box;
          color: #000;
        }

        > a {
          font-size: 1.6rem;
          font-weight: 500;
        }

        > ul {
          > li {
            position: relative;

            > a {
              width: 50%;
              font-size: 1.4rem;
              font-weight: 400;
            }

            > ul {
              display: none;
              flex-direction: column;
              padding: 1rem 0;
              background-color: #f7f8fc;

              li {
                a {
                  font-size: 1.4rem;
                }
              }
            }

            &.has_child {
              &::before {
                position: absolute;
                top: 0.875rem;
                right: 2rem;
                width: 1rem;
                height: 1rem;
                border: 2px solid #808080;
                border-right-color: transparent;
                border-top-color: transparent;
                transform: rotate(-45deg);
                content: "";
              }

              &::after {
                position: absolute;
                top: 0;
                right: 1.5rem;
                width: 4rem;
                height: 4rem;
                content: "";
              }
            }

            &.active {
              &::before {
                top: 1.555rem;
                transform: rotate(135deg);
              }

              > ul {
                display: flex;
              }
            }
          }
        }
      }
    }
  }

  &.active {
    position: relative;
    top: -5rem;
    z-index: 15;

    &:before {
      display: block;
    }

    .cate_btn {
      position: absolute;
      border-radius: 5px;

      &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }

      &:before {
        height: 2px;
        background-color: #808080;
        border: none;
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }

    .cate_mobile {
      display: block;
    }
  }

  @media screen and (min-width: 640px) {
    display: none;
  }
`;
