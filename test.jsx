import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AuthPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted with " + JSON.stringify(formData));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-96 p-6 shadow-lg">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="flex justify-around">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <Input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <Button type="submit" className="w-full">Login</Button>
              </form>
            </CardContent>
          </TabsContent>
          <TabsContent value="register">
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
                <Input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <Input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <Button type="submit" className="w-full">Register</Button>
              </form>
            </CardContent>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}