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
  name: "AreaChart",
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

  data () {
    return {
      gradient1: null,
      gradient2: null,
      gradient3: null
    }
  },

  watch: {
    orders () {
      this.mapData()
    }
  },

  mounted () {
    this.gradient1 = this.generateGradient("255, 0, 0")
    this.gradient2 = this.generateGradient("0, 225, 0")
    this.gradient3 = this.generateGradient("0, 0, 255")
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
        `rgba(${color}, 0.5)`
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
                label: i18n.t("OrdersTable.companyOwnWeb1"),
                backgroundColor: this.gradient3,
                data: this.orders.map(func("companyOwnWeb"))
              },
              {
                ...defaultSettings,
                label: i18n.t("OrdersTable.web1"),
                backgroundColor: this.gradient2,
                data: this.orders.map(func("web"))
              },
              {
                ...defaultSettings,
                label: i18n.t("OrdersTable.mobile1"),
                backgroundColor: this.gradient1,
                data: this.orders.map(func("mobile"))
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
