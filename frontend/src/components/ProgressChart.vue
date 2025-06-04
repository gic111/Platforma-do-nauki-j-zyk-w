import { Pie } from 'vue-chartjs';

export default {
  extends: Pie,
  props: ['stats'],
  mounted() {
    this.renderChart({
      labels: ['Learned', 'Reviewing', 'New'],
      datasets: [{
        data: [this.stats.learned, this.stats.reviewing, this.stats.new],
        backgroundColor: ['#4CAF50', '#FFC107', '#9E9E9E']
      }]
    });
  }
}