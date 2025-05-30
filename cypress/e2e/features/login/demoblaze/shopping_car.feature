Feature: Realizar flujo de compras en web de DemoBlaze

Scenario: Seleccionar un producto
  Given accedo al home de DemoBlaze
  When hago clic a un producto
  Then deberia ser redirigido a ver la informacion del producto
