"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../_config";
import * as XLSX from "xlsx"; // Import SheetJS
import { Button } from "@/components/ui/button"; // Import Button component

interface mockReviewsType {
  name: string;
  id: string;
  email: string;
  phone: string;
  rating: number;
  review:string;
  date: string;
}

export default function ReviewsPage() {
  const [mockReviews, setmockReviews] = useState<Array<mockReviewsType>>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/review`);
        const reviews = res.data;
        console.log(reviews);
        if (Array.isArray(reviews)) {
          setmockReviews(reviews);
        } else {
          console.log("API response is not an array:", reviews);
          setmockReviews([]);
        }
      } catch (error) {
        console.log("Error fetching reviews:", error);
      }
    })();
  }, []);

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(mockReviews);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Reviews");
    XLSX.writeFile(workbook, "reviews.xlsx");
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button onClick={exportToExcel} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Export to Excel
        </Button>
      </div>

      <div className="grid gap-4 mb-8 grid-cols-1 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockReviews.length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Inquiries</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Review</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockReviews.map((review: mockReviewsType, index: number) => (
                <TableRow key={index}>
                  <TableCell>{review.name}</TableCell>
                  <TableCell>{review.email}</TableCell>
                  <TableCell>{review.phone}</TableCell>
                  <TableCell>{review.rating}/5</TableCell>
                  <TableCell>{review.review}</TableCell>
                  <TableCell>
                    {new Date(review.date).toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
