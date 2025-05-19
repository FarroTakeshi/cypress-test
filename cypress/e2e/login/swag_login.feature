Feature: Inicio de sesión en la Página de SwagLabs
  Scenario: Login Exitoso
    Given visito la web de SwagLabs
    When introduzco las credenciales correctas
    And hago clic en el botón de inicio de sesión
    Then debería ser redirigido a la página de Products