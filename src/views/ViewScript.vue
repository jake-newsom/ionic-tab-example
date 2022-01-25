<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Feed</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Feed</ion-title>
        </ion-toolbar>
      </ion-header>
      View Script
      <ion-button
        :router-link='"/bigfeature/"'>
        Open New Feature
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';

export default  {
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton }
}
</script>