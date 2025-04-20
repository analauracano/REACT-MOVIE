import styled from "styled-components";

export const Container = styled.div`
    min-height: 100px;
    z-index: 99;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    top: -20px;
    background-color: ${(props) => (props.changeBackground ? "#000" : "transparent")};
    transition: background-color 0.8s ease-in-out;

    img {
        width: 120px;
    }
`;

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;
    margin: 0;
    padding: 0;
`;

export const Li = styled.li`
    font-weight: 600;
    cursor: pointer;
    font-size: 20px;
    position: relative;

    a {
        text-decoration: none;
        color: #fff;
    }

    &::after {
        content: "";
        height: 3px;
        width: ${(props) => (props.isActive ? "100%" : 0)};
        background:rgb(235, 10, 122);
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.5s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`;
