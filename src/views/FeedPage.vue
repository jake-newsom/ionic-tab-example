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
    
        <ion-button
          expand="block"
          :router-link="'/tabs/feed/blog'"
        >
         View Blog
        </ion-button>
    
        <ion-button
          expand="block"
          :router-link="'/tabs/feed/script'"
        >
          View Script
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