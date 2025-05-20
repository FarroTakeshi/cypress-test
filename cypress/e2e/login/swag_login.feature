Feature: Inicio de sesión en la Página de SwagLabs
  Scenario: Login Exitoso
    Given visito la web de SwagLabs
    When introduzco las credenciales correctas
    And hago clic en el botón de inicio de sesión
    Then debería ser redirigido a la página de Products

  Scenario: Login Fallido
    Given visito la web de SwagLabs
    When introduzco las credenciales incorrectas
    And hago clic en el botón de inicio de sesión
    Then debería mostrarse un mensaje de error
    And debería mostrarse con un fondo de color "#e2231a"