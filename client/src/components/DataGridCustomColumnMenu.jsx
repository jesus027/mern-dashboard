import {
    GridColumnMenuContainer,
    GridColumnMenuFilterItem,
    GridColumnMenuHideItem,
} from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
    const { hideMenu, currentColumn, open } = props;
    return (
        <GridColumnMenuContainer
            hideMenu={hideMenu}
            currentColumn={currentColumn}
            open={open}
        >
            <GridColumnMenuFilterItem colDef={currentColumn} onClick={hideMenu} />
            <GridColumnMenuHideItem colDef={currentColumn} onClick={hideMenu} />
        </GridColumnMenuContainer>
    );
};

export default CustomColumnMenu;