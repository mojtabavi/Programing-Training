import Teacher,{ promote } from "./teacher";
import React, { Component } from "react";

//Default -> import ... from "";
//Named -> import { ... } from "";

const teacher = new Teacher('Ali','MSc');
teacher.teach();