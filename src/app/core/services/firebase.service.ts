import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  addDoc,
  DocumentSnapshot,
  doc
} from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private firestore: Firestore = inject(Firestore);
  public auth: Auth = inject(Auth);

  getData(collection_name: string): Observable<DocumentSnapshot[]> {
    return collectionData(collection(this.firestore, collection_name),
    { idField: 'id' }  // Esto es importante: incluye el ID en cada documento
    );
  }

  addData(data: any, collection_name: string) {
    return addDoc(collection(this.firestore, collection_name), data);
  }
    
  updateData(data: any, collection_name: string) {
    const docRef = doc(this.firestore, collection_name, data.id);
    return updateDoc(docRef, data);
  }

}