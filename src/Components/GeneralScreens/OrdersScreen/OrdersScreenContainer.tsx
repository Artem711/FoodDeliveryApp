// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import OrdersScreen from "./OrdersScreen"

// EXTRA IMPORTS //
import { AppStateType } from "../../../Redux/ReduxStore"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {}

type MapDispatchToPropsType = {}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {}
}

const OrdersScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {}
  )
)(OrdersScreen)

export default OrdersScreenContainer
