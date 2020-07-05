// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import OrdersList from "../../Shared/Sections/OrdersList/OrdersList"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  OrdersList: Array<{
    date: string
    deliveryStatus: string
    products: Array<{ title: string; count: string | number }>
  }>
}

const OrdersScreen: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.container}>
      <OrdersList
        title={"Заказы"}
        titleStyle={{
          fontSize: 30,
          letterSpacing: 0.3,
        }}
        orders={props.OrdersList}
        shwowDeliveryStatus={true}
        showTiming={true}
        showFullList={true}
      />
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30.19,
  },
})

export default OrdersScreen
