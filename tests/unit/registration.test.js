import { mount } from '@vue/test-utils'
import RegistrationView from '@/components/RegistrationView.vue'
import { describe, test, expect } from '@jest/globals'

describe('RegistrationView', () => {
  test('registers a new user', async () => {
    const wrapper = mount(RegistrationView)

    // Simuliere die Eingabe von Benutzerdaten
    const emailInput = wrapper.find('#exampleInputEmail1')
    emailInput.setValue('test@example.com')

    const confirmEmailInput = wrapper.find('#confirmEmail')
    confirmEmailInput.setValue('test@example.com')

    const passwordInput = wrapper.find('#exampleInputPassword1')
    passwordInput.setValue('password123')

    const confirmPasswordInput = wrapper.find('#confirmPassword')
    confirmPasswordInput.setValue('password123')

    // Simuliere das Klicken auf den Registrierungsbutton
    const registerButton = wrapper.find('.LoginButton')
    await registerButton.trigger('click')

    // Überprüfe, ob der Benutzer erfolgreich registriert wurde
    expect(wrapper.vm.$data.user.email).toBe('test@example.com')
    expect(wrapper.vm.$data.user.password).toBe('password123')
  })
})
