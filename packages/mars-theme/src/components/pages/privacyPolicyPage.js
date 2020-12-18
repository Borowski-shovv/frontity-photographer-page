import React from 'react';
import { styled, connect } from 'frontity';

function PrivacyPolicyPage() {
    return (
      <PrivacyPolicyWrapper>
           <PrivacyList>
                  <li>
                    Niniejsza Polityka prywatności dotyczy serwisu internetowego
                    skibickifoto.pl administrowanego przez 
                    Szczepan Skibicki z siedzibą: 
                  </li>
                  <li>
                    Podczas odwiedzin przez Użytkownika serwisu
                    skibickifoto.pl, system serwisu wysyła do komputera
                    Użytkownika co najmniej jeden plik Cookie, w celu
                    jednoznacznego zidentyfikowania przeglądarki.
                  </li>
                  <li>
                    Serwer serwisu automatycznie rejestruje informacje
                    przesyłane przez przeglądarkę Użytkownika w czasie
                    wyświetlania witryn. Dzienniki serwera mogą zawierać
                    informacje takie jak żądanie sieciowe, adres IP, typ i język
                    przeglądarki, data i godzina przesłania żądania. Te
                    informacje pozwalają podnosić jakość naszych usług dzięki
                    identyfikowaniu i przechowywaniu preferencji Użytkowników
                    oraz śledzeniu trendów, takich jak na przykład sposoby w
                    jakich przeszukiwana jest nasza strona.
                  </li>
                  <li>
                    Serwis wykorzystuje pliki Cookies w celu:
                    <ol type="a">
                      <li>zapamiętania zalogowania;</li>
                      <li>zapamiętania preferencji wyświetlania Serwisu;</li>
                      <li>
                        tworzenia statystyk i raportów oglądalności
                        funkcjonowania Serwisu.
                      </li>
                    </ol>
                  </li>
                  <li>
                    Użytkownik może zabronić odbierania plików cookies, przez co
                    pozostanie anonimowy, aczkolwiek nie zezwalając na
                    rejestrację plików cookies, serwis skibickifoto.pl nie
                    będzie mógł zidentyfikować Użytkownika ani jego preferencji.
                  </li>
                  <li>
                    W celu skonfigurowania opcji swojego urządzenia w zakresie
                    wyrażenia zgody na zapisywanie plików cookies oraz
                    określenia zakresu zapisywanych cookies, Użytkownik może
                    dokonać zmian ustawienia wykorzystywanej przeglądarki
                    internetowej.
                  </li>
                  <li>
                    Serwis skibickifoto.pl informuje, że niedokonanie przez
                    Użytkownika zmiany ustawień w zakresie cookies oznacza, że
                    będą one zamieszczone w urządzeniu końcowym Użytkownika. W
                    takim przypadku Serwis może przechowywać informacje w
                    urządzeniu końcowym Użytkownika i uzyskiwać dostęp do tych
                    informacji.
                  </li>
                  <li>
                    Informacje na temat zarządzania plikami Cookies w
                    poszczególnych przeglądarkach można znaleźć na stronach
                    dedykowanych poszczególnym przeglądarkom:
                    <ol type="a">
                      <li>
                        Firefox: http: //support.mozilla.org/pl/kb/ciasteczka
                      </li>
                      <li>
                        Internet Explorer: http:
                        //support.microsoft.com/kb/196955/pl
                      </li>
                      <li>
                        Chrome: http:
                        //support.google.com/chrome/bin/answer.py?hl=pl&answer=95647
                      </li>
                      <li>
                        Opera: http:
                        //help.opera.com/Linux/12.10/pl/cookies.html
                      </li>
                      <li>
                        Safari: http:
                        //support.apple.com/kb/HT1677?viewlocale=pl_PL&locale=pl_PL
                      </li>
                    </ol>
                  </li>
                </PrivacyList>
      </PrivacyPolicyWrapper>
    )
}

export default connect(PrivacyPolicyPage)

const PrivacyPolicyWrapper = styled.div`
    max-width: 1500px;
    margin: 50px auto;
    padding: 0 40px;
    display: flex;
    justify-content: center;
    line-height: 1.8;

`;

const PrivacyList = styled.ol`
    width: 70%;

    @media (max-width: 768px) {
        width: 100%;
        font-size: 12px;
}`;