import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  updateDoc,
  addDoc,
  DocumentSnapshot
} from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private firestore: Firestore = inject(Firestore);

  getData(collection_name: string): Observable<DocumentSnapshot[]> {
    return collectionData(collection(this.firestore, collection_name));
  }

  addData(data: any, collection_name: string) {
    return addDoc(collection(this.firestore, collection_name), data);
  }

  updateData(data: any, collection_name: string) {
    const docRef = doc(this.firestore, collection_name, data.id);
    return updateDoc(docRef, data);
  }
}

