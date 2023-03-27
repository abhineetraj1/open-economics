package pck1;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Arrays;
import pck1.Predictor.*;




public class DataPredictor {
    private Predictor predictor;

    public DataPredictor() {
        this.predictor = new Predictor();
    }

    public PredictedData predictData(List<Integer> oilPrice, List<Integer> currencyValue) {
        if (oilPrice.size() == currencyValue.size() && oilPrice.size() == 10) {
            List<Integer> oilPredicted = predictor.predictValue(oilPrice);
            List<Integer> currencyPredicted = predictor.predictValue(currencyValue);
            List<Integer> y = new ArrayList<>();
            for (int i = 0; i < 10; i++) {
                y.add(oilPredicted.get(i) * currencyPredicted.get(i));
            }
            int minIndex = y.indexOf(Collections.min(y));
            return new PredictedData(minIndex, y.get(minIndex), Arrays.asList(oilPredicted, currencyPredicted));
        } else {
            System.out.println("List value is incomplete");
            return null;
        }
    }
}
public class Predictor {
    private double b0;
    private double b1;

    public Predictor() {
        this.b0 = -5;
        this.b1 = 0.1;
    }

    public List<Integer> predictValue(List<Integer> array) {
        List<Integer> predictedPrices = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            double z = this.b0 + this.b1 * array.get(array.size() - 1);
            double p = 1 / (1 + Math.exp(-z));
            int predictedPrice = (int) Math.round(p * 100);
            predictedPrices.add(predictedPrice);
            array.add(predictedPrice);
        }
        return predictedPrices;
    }
}