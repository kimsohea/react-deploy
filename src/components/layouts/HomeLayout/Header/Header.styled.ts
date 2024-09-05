import styled from "styled-components";

export const HeaderBuffer = styled.div`
  height: 60px;
`;

export const HeaderWrap = styled.header`
  position: fixed;
  width: 100%;
  height: fit-content;
  background-color: #fff;
  box-sizing: border-box;
  z-index: 10;

  .header_wrap {
    position: relative;
    display: flex;
    width: 1200px;
    align-items: center;
    justify-content: space-between;
    padding-left: 100px;
    margin: 0 auto;
    box-sizing: border-box;

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
            width: 100vw;
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

  @media screen and (max-width: 1200px) {
    min-width: 100%;
    padding: 4rem 3% 0;
    box-sizing: border-box;

    .header_wrap {
      width: 100%;
    }
  }

  @media screen and (max-width: 640px) {
    height: fit-content;
    padding: 1.75rem 1.5rem;

    .header_wrap {
    }
  }
`;
