Feature: Realizar flujo de compras en web de DemoBlaze

Scenario: Seleccionar un producto
  Given visito el home de DemoBlaze
  When hago clic al producto producto "Samsung galaxy s6"
  Then deberia ser redirigido a ver la informacion del producto
