"use client";
import { useState, useEffect } from "react";
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
import * as XLSX from "xlsx"; // Import SheetJS
import axios from "axios";
import { BACKEND_URL } from "../_config";
import { Button } from "@/components/ui/button";
import CustomButton from "../_components/Button";

interface mockUsersType {
  name: string;
  id: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
}

export default function AdminDashboard() {
  const [mockUsers, setMockUsers] = useState<Array<mockUsersType>>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [showDeleteAllModal, setShowDeleteAllModal] = useState(false);
  const [deleteAllConfirmText, setDeleteAllConfirmText] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/users`);
        const users = res.data.users;
        if (Array.isArray(users)) {
          setMockUsers(users);
        } else {
          setMockUsers([]);
        }
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    })();
  }, []);

  const deleteUser = async (userId: string) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/v1/users`, {
        data: { userId, msg: "" },
      });
      setMockUsers((prev) => prev.filter((user) => user.id !== userId));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAllUsers = async () => {
    if (deleteAllConfirmText === "DELETE") {
      try {
        await axios.delete(`${BACKEND_URL}/api/v1/users`, {
          data: { userId: "", msg: "DELETE_ALL" },
        });
        setMockUsers([]);
        setShowDeleteAllModal(false);
        setDeleteAllConfirmText("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(mockUsers);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "users.xlsx");
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
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <CustomButton fun={() => setShowDeleteAllModal(true)} variant="destructive">
              Delete All Users
            </CustomButton>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockUsers.length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Users</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.service}</TableCell>
                  <TableCell>{user.message}</TableCell>
                  <TableCell>
                    {new Date(user.date).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Trash2
                      onClick={() => setSelectedUserId(user.id)}
                      size={16}
                      className="cursor-pointer hover:text-red-700"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Single User Delete Confirmation Modal */}
      {selectedUserId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-lg font-bold">Confirm Deletion</h2>
            <p>Are you sure you want to delete this user?</p>
            <div className="flex justify-end gap-4 mt-4">
              <Button variant="secondary" onClick={() => setSelectedUserId(null)}>
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() => {
                  deleteUser(selectedUserId);
                  setSelectedUserId(null);
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Delete All Users Confirmation Modal */}
      {showDeleteAllModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-lg font-bold text-red-600">Confirm Bulk Deletion</h2>
            <p>Type <strong>DELETE</strong> to confirm deletion of all users.</p>
            <input
              type="text"
              className="border p-2 w-full mt-2"
              value={deleteAllConfirmText}
              onChange={(e) => setDeleteAllConfirmText(e.target.value)}
            />
            <div className="flex justify-end gap-4 mt-4">
              <Button variant="secondary" onClick={() => setShowDeleteAllModal(false)}>
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={deleteAllUsers}
                disabled={deleteAllConfirmText !== "DELETE"}
              >
                Delete All
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
