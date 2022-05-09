<script>
import {Line} from "vue-chartjs"
import i18n from "@/i18n"

const defaultSettings = {
  borderColor: "#000",
  pointBackgroundColor: "white",
  borderWidth: 1,
  pointBorderColor: "white"
}
const func = (key) => (item) => item[key]

export default {
  name: "AreaChartStatus",
  extends: Line,
  props: {
    orders: {
      type: Array,
      default: () => {}
    },

    labels: {
      type: Array,
      default: () => {}
    }
  },

  watch: {
    orders () {
      this.mapData()
    }
  },

  mounted () {
    this.mapData()
  },

  methods: {
    generateGradient (color) {
      const gradient = this.$refs.canvas.
        getContext("2d").
        createLinearGradient(
          0,
          0,
          0,
          450
        )
      gradient.addColorStop(
        0,
        `rgba(${color}, 1)`
      )
      gradient.addColorStop(
        0.75,
        `rgba(${color}, 1)`
      )
      return gradient
    },

    mapData () {
      if (this.orders?.length) {
        this.renderChart(
          {
            labels: this.labels,
            datasets: [
              {
                ...defaultSettings,
                label: i18n.t("OrdersTable.waitingFirmAccept"),
                backgroundColor: this.generateGradient("0,119,179"),
                data: this.orders.map(func("waitingFirmAccept"))
              },
              {
                ...defaultSettings,
                label: i18n.t("OrdersTable.cancelled"),
                backgroundColor: this.generateGradient("25,25,255"),
                data: this.orders.map(func("cancelled"))
              },
              {
                ...defaultSettings,
                label: i18n.t("OrdersTable.failed"),
                backgroundColor: this.generateGradient("238,204,255"),
                data: this.orders.map(func("failed"))
              },
              {
                ...defaultSettings,
                label: i18n.t("OrdersTable.waitingCustomerAccept"),
                backgroundColor: this.generateGradient("128, 0, 255"),
                data: this.orders.map(func("waitingCustomerAccept"))
              },
              {
                ...defaultSettings,
                label: i18n.t("OrdersTable.rejected"),
                backgroundColor: this.generateGradient("255, 42, 0"),
                data: this.orders.map(func("rejected"))
              },
              {
                ...defaultSettings,
                label: i18n.t("OrdersTable.waitingPackaging"),
                backgroundColor: this.generateGradient("128, 255, 128"),
                data: this.orders.map(func("waitingPackaging"))
              },

              {
                ...defaultSettings,
                label: i18n.t("OrdersTable.packaged"),
                backgroundColor: this.generateGradient("255, 170, 0"),
                data: this.orders.map(func("packaged"))
              },
              {
                ...defaultSettings,
                label: i18n.t("OrdersTable.delivered"),
                backgroundColor: this.generateGradient("85, 255, 0"),
                data: this.orders.map(func("delivered"))
              },
              {
                ...defaultSettings,
                label: i18n.t("OrdersTable.completed1"),
                backgroundColor: this.generateGradient("128, 255, 128"),
                data: this.orders.map(func("completed"))
              }
            ]
          },
          {
            responsive: true,
            maintainAspectRatio: false
          }
        )
      }
    }
  }
}
</script>
