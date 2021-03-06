﻿/// <reference path="scripts/jquery-3.1.1.js" />
var appUrl = 'https://app.pacti.de';
// Eine Einführung zur leeren Vorlage finden Sie in der folgenden Dokumentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Zum Debuggen von Code beim Laden einer Seite in cordova-simulate oder auf Android-Geräten/-Emulatoren: App starten, Haltepunkte festlegen, 
// und führen Sie dann "window.location.reload()" in der JavaScript-Konsole aus.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Verarbeiten der Cordova-Pause- und -Fortsetzenereignisse
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova wurde geladen. Führen Sie hier eine Initialisierung aus, die Cordova erfordert.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        var url = appUrl + "/api/setphonegap?deviceuid=" + device.uuid +
            "&devicename=" + device.model +
            "&phonegap=3.6.3" +
            "&deviceos=" + device.platform +
            "&deviceversion=" + device.version;

        console.log(url);

        $('html').load(encodeURI(url));
        

        console.log(device.uuid);

    };

    function onPause() {
        // TODO: Diese Anwendung wurde ausgesetzt. Speichern Sie hier den Anwendungszustand.
    };

    function onResume() {
        // TODO: Diese Anwendung wurde erneut aktiviert. Stellen Sie hier den Anwendungszustand wieder her.
    };
} )();