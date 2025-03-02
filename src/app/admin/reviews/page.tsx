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
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../_config";

interface mockUsersType {
  name: string;
  id: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
}

export default function ReviewsPage() {
  const [mockUsers, setMockUsers] = useState<Array<mockUsersType>>([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/users`);
        const users = res.data.users;
        console.log(users);
        // Check if the response is an array before setting state
        if (Array.isArray(users)) {
          setMockUsers(users);
        } else {
          console.log("API response is not an array:", users);
          setMockUsers([]); // Fallback to an empty array
        }
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    })();
  }, []);

  const deleteUser = async (userId: string) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/v1/users`, {
        data: {
          userId,
          msg: "",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  // const deleteAllUsers = async () => {
  //   try {
  //     await axios.delete(`${BACKEND_URL}/api/v1/users`, {
  //       data: {
  //         userId: "",
  //         msg: "DELETE_ALL",
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid gap-4 mb-8 grid-cols-1 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Inquiries
            </CardTitle>
            {/* <CustomButton fun={deleteAllUsers} variant="destructive">
              Delete All Users
            </CustomButton> */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockUsers.length}</div>
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
                <TableHead>Subject</TableHead>
                <TableHead>message</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user: mockUsersType, index: number) => (
                <TableRow key={index}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.service}</TableCell>
                  <TableCell>{user.message}</TableCell>
                  <TableCell>
                    {new Date(user.date).toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </TableCell>
                  <TableCell className="">
                    <Trash2
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                      size={16}
                      className=" cursor-pointer hover:text-red-700"
                    />
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
