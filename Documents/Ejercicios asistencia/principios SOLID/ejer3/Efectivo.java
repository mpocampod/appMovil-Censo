package ejer3;

public class Efectivo implements IMetodosPago {

    @Override
    public String pagar() {
        return "Efectivo";
    }
}
